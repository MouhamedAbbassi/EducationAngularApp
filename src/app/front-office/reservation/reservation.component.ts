import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../model/chambre";
import {User} from "../../service/user.service";
import {Reservation} from "../../model/reservation";
import {ReservationService} from "../../service/reservation.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {jwtDecode} from "jwt-decode";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
interface MyTokenPayload {
  sub: string;
  roles: string[];
  "iat": '';
  "exp": '';

}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  constructor(private reservationService :ReservationService, private tokenStorage: TokenStorageService,private authService:AuthService,private _router:Router) {
  }
  ngOnInit(): void {
    this.getNotReservedRooms();
    this.getCurrentUser();
  }

  selectedChambre: Chambre = null; // Declare selectedUniversite property
  selectedEtudiant: User=null; // Declare selectedUniversite property

  notReservedRooms: Chambre[] = [];
  EtudiantWithoutReservation: User[] = [];
  CurrentUser:any;



  Reservations: Reservation ={
    idReservation:0,
    anneeUniversaire:null,


    chambre : null,
    etudiant : null,



  };


  ajouterReservation() {
   // const token= this.tokenStorage.getToken();
   //  console.log("token",token);
   //  const tokenPayload:MyTokenPayload=jwtDecode(token);
   //  const userEmail = tokenPayload.sub;
   //  console.log(userEmail);


    const requestBody = {
      anneeUniversitaire: this.Reservations.anneeUniversaire,
      chambreId: this.selectedChambre.idChambre, // Assuming 'id' is the identifier for chambre
     userId:this.CurrentUser.id  // Assuming 'id' is the identifier for user
    };

    console.log(requestBody);
    this.reservationService.createReservation(requestBody).subscribe(()=>{
      console.log("Reservation added succesfully");
      this._router.navigate(['/front/home']);

    },error => {
      console.log(error);

    });

  }

  retour() {

  }

  private getNotReservedRooms() {
    this.reservationService.getNotReservedRooms().subscribe(
      (data) => {
        this.notReservedRooms = data;
        console.log(this.notReservedRooms)
      },
      (error) => {
        console.error('Error fetching not reserved rooms:', error);
      }
    );
  }

  private getCurrentUser() {
    this.authService.getCurrentuser().subscribe((data:any)=>{
      this.CurrentUser=data;
      console.log("User",this.CurrentUser);

    },error => {
      console.log(error);
    });
  }
}
