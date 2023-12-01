import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre';
import { Etudiant } from 'src/app/model/etudiant';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {


  selectedChambre: Chambre = null; // Declare selectedUniversite property
  selectedEtudiant: Etudiant = null; // Declare selectedUniversite property
  notReservedRooms: Chambre[] = [];
  EtudiantWithoutReservation: Etudiant[] = [];

  Reservations: Reservation ={
    idReservation:0,
    anneeUniversaire:null,
    chambre : this.selectedChambre,
    etudiant : this.selectedEtudiant,
    choixReservation: null
   
   };
  constructor(private reservationService:ReservationService,private router:Router){}

  ajouterReservation() { 
    console.log(this.selectedChambre)
        this.Reservations.chambre = this.selectedChambre;
        this.Reservations.etudiant = this.selectedEtudiant;
        console.log("nnn",this.Reservations); // Check if the Foyers object is updated with the selectedUniversite
  
        this.reservationService.createReservation(this.Reservations).subscribe(
          () => {
            console.log("Rservation ajouter avec succées !")
            this.router.navigate(['/back/reservation/list']);
          },
          (error: HttpErrorResponse) => { // Specify the type as HttpErrorResponse
            console.error('Error adding Reservation:', error);
          }
        );
  }
  getNotReservedRooms(): void {
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
  
  getEtudiantWithoutReservation(): void {
    this.reservationService.getEtudiantWithoutReservation().subscribe(
      (data) => {
        this.EtudiantWithoutReservation = data;
        console.log("etudiant get all",this.EtudiantWithoutReservation)
      },
      (error) => {
        console.error('Error fetching not etudiants:', error);
      }
    );
  }


  ngOnInit(): void {
    this.getNotReservedRooms()
    this.getEtudiantWithoutReservation()
  }
  retour(){
    this.router.navigate(['/back/reservation/list']);

  }

}
