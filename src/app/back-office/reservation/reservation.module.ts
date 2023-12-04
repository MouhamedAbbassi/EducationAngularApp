import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
<<<<<<< HEAD
import { ReservationComponent } from './reservation/reservation.component';
import {FormsModule} from "@angular/forms";
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
=======
import { ReservationComponent } from './reservation-List/reservation.component';
import {HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {Chart} from 'chart.js';
import {registerables} from 'chart.js'







>>>>>>> ea09540995da44f5173cec1571789c7f55553326


@NgModule({
  declarations: [
    ReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
<<<<<<< HEAD
    NgxPaginationModule,
    Ng2SearchPipeModule,
=======
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,





>>>>>>> ea09540995da44f5173cec1571789c7f55553326
  ]
})
export class ReservationModule { }
