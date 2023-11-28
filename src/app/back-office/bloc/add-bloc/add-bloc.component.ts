import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/Services/Bloc/bloc.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {

  constructor(private es: BlocService, private router: Router) { }
  ngOnInit(): void {}


  addBloc(blocData: any) {
    this.es.addBloc(blocData).subscribe(
      () => {
        // Handle a successful response (status code 200) here
        this.router.navigate(['back/bloc/bloclist']);
      },
      (error: HttpErrorResponse) => {
        // Handle the error here
        if (error.status === 200) {
          // Consider a status code of 200 as success and navigate
          this.router.navigate(['back/bloc/bloclist']);
        } else {
          console.error('Error adding Etudiant:', error);
          // Handle the error as needed, e.g., display an error message to the user
        }
      }
    );
  }


}
