import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  Reservations: Reservation[] = [];
  notReservedRooms: Chambre[] = [];
 

  constructor(private reservationService:ReservationService,private router:Router){}


  private getReservation() {
    this.reservationService.getListReservation().subscribe(data=> {
      this.Reservations=data;
    })}
    
    deleteReservation(idReservation:number){

      this.reservationService.deleteReservation(idReservation).subscribe( data => {
        console.log(data);
        this.getReservation();
      })
    }






  ngOnInit(): void {
    this.getReservation();
  }
  

}
