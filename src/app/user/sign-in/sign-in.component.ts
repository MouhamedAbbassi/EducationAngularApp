import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../service/auth.service";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AppConstants} from "../../commons/app.constant";
import {TokenStorageService} from "../../service/token-storage.service";

interface MyTokenPayload {
  sub: string;
  roles: string[];
  "iat": '';
  "exp": '';

}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL=AppConstants.GOOGLE_AUTH_URL;
  constructor(private authService :AuthService ,
              private router:Router,
              private toast:ToastrService,
              private tokenStorage: TokenStorageService
               ) {
  }
  ngOnInit(): void {
    const token :string =this.tokenStorage.getToken();
    if(token)
    {
        if(this.isValidToken(token))
        {
          this.fetchCurrentUser();

        }




    }
    else {
      //rederick to login and clear localstor
      this.tokenStorage.signOut();
      this.router.navigate(['user/signin']);

    }






  }


  onSubmit(f: NgForm)  {
    // if (!f.valid) {
    //
    //   return;
    // }


    this.authService.login(f.value).subscribe((data:any) =>{

      console.log("login successufully");
      const token=data.token;
      const tokenPayload:MyTokenPayload=jwtDecode(token);
      const userEmail = tokenPayload.sub;
      const userRoles= tokenPayload.roles;
      localStorage.setItem('token',token);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('userRoles', JSON.stringify(userRoles));
      if(userRoles && userRoles.includes('ADMIN'))
      {
        console.log("admin dashboard");
        this.router.navigate(['/back/dashboard']);
      }

      else if(userRoles && userRoles.includes('USER'))
      {
        console.log("user dashboard");


      }
      this.toast.success("Login success");
      console.log("after the toast")

    },error => {
      console.log(error);
     // this.router.navigate(['/error']);

    });
  }


  private isValidToken(token: string) :boolean {
    const tokenPayload:MyTokenPayload=jwtDecode(token);

    const tokenDateCreated = tokenPayload.iat;
    const tokenDateExpired= tokenPayload.exp;
    if(tokenDateExpired>tokenDateCreated)
    {
      return true;
    }

    return false;
  }

  private fetchCurrentUser() {
    this.authService.getCurrentuser().subscribe((data:any)=>{
      this.isLoggedIn=true;
      this.currentUser=data;
      console.log("user yuser user ::::::::::::: " ,this.currentUser);

    },err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;

    });
  }
}
