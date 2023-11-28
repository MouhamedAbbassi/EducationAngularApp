import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation-List/reservation.component';
import {HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,


  ]
})
export class ReservationModule { }
