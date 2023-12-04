<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../../model/reservation";
import {ReservationService} from "../../../service/reservation.service";
import {ActivatedRoute, Router} from "@angular/router";
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';
>>>>>>> ea09540995da44f5173cec1571789c7f55553326

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
<<<<<<< HEAD

export class UpdateReservationComponent implements OnInit{
  idReservation : number;

  Chambre: any; // Adjust the type according to your data structure

  reservation :any;
  constructor(private reservationService:ReservationService,private route :ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.idReservation = this.route.snapshot.params['idReservation'];
    console.log(this.idReservation);
    this.reservationService.getReservationById(this.idReservation).subscribe(data=>{
        this.reservation=data;
        console.log(this.reservation);
      },
      error => console.log(error));
  }
  onSubmit(){

  //   this.reservationService.updateReservation(this.idReservation,this.reservation.chambre).subscribe(
  //     data => {
  //       console.log("Update successful:", data);
  //       this.reservationService.getListReservation().subscribe(
  //         reservations => {
  //           console.log("All reservations after update:", reservations);
  //           // Mettez à jour votre tableau de réservations ici
  //         },
  //         error => console.error("Error fetching updated reservations:", error)
  //       );
  //     },
  //     error => console.error("Update error:", error)
  //   );
  //
  //   this.router.navigate(['/back/reservation/list']);
    this.reservationService.updateReservation(this.idReservation,this.reservation).subscribe((data)=>{

    },error => {
      console.log(error);

    });
    this.router.navigate(['/back/reservation/list']);
   }


=======
export class UpdateReservationComponent implements OnInit {

  idReservation : number;

  Chambre: any; // Adjust the type according to your data structure
  
  reservation : Reservation=new Reservation(
  
);
  constructor(private reservationService:ReservationService,private route :ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.idReservation = this.route.snapshot.params['idReservation'];
    this.reservationService.getReservationById(this.idReservation).subscribe(data=>{
      this.reservation=data;
    },
    error => console.log(error));
  }
  onSubmit(){
    
    this.reservationService.updateReservation(this.idReservation,this.reservation.chambre).subscribe(
      data => {
        console.log("Update successful:", data);
        this.reservationService.getListReservation().subscribe(
          reservations => {
            console.log("All reservations after update:", reservations);
            // Mettez à jour votre tableau de réservations ici
          },
          error => console.error("Error fetching updated reservations:", error)
        );
      },
      error => console.error("Update error:", error)
    );

this.router.navigate(['/back/reservation/list']);
  }

 
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
  retour(){
    this.router.navigate(['/back/reservation/list']);

  }
<<<<<<< HEAD
}
=======
  }
>>>>>>> ea09540995da44f5173cec1571789c7f55553326


