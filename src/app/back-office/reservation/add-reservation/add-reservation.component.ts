<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../model/chambre";
import {User} from "../../../service/user.service";
import {Reservation} from "../../../model/reservation";
import {ReservationService} from "../../../service/reservation.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
=======
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre';
import { Etudiant } from 'src/app/model/etudiant';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';
>>>>>>> ea09540995da44f5173cec1571789c7f55553326

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
<<<<<<< HEAD
export class AddReservationComponent implements OnInit{
  selectedChambre: Chambre = null; // Declare selectedUniversite property
  selectedEtudiant: User=null; // Declare selectedUniversite property

  notReservedRooms: Chambre[] = [];
  EtudiantWithoutReservation: User[] = [];

=======
export class AddReservationComponent implements OnInit {


  selectedChambre: Chambre = null; // Declare selectedUniversite property
  selectedEtudiant: Etudiant = null; // Declare selectedUniversite property
  notReservedRooms: Chambre[] = [];
  EtudiantWithoutReservation: Etudiant[] = [];
>>>>>>> ea09540995da44f5173cec1571789c7f55553326

  Reservations: Reservation ={
    idReservation:0,
    anneeUniversaire:null,
<<<<<<< HEAD

    chambre : null,
    etudiant : null,



  };
  constructor(private reservationService:ReservationService,private router:Router){}


  ajouterReservation() {
    const requestBody = {
      anneeUniversitaire: this.Reservations.anneeUniversaire,
      chambreId: this.selectedChambre.idChambre, // Assuming 'id' is the identifier for chambre
      userId: this.selectedEtudiant.id // Assuming 'id' is the identifier for user
    };

    console.log(requestBody);










    this.reservationService.createReservation(requestBody).subscribe(
      () => {
        console.log("Rservation ajouter avec succées !")
        this.router.navigate(['/back/reservation/list']);
      },
      (error: HttpErrorResponse) => { // Specify the type as HttpErrorResponse
        console.error('Error adding Reservation:', error);
      }
    );
=======
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
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
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
<<<<<<< HEAD

=======
  
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
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
<<<<<<< HEAD

=======
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
  }
  retour(){
    this.router.navigate(['/back/reservation/list']);

  }
<<<<<<< HEAD
=======

>>>>>>> ea09540995da44f5173cec1571789c7f55553326
}
