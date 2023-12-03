import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation-List/reservation.component';
import {HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {Chart} from 'chart.js';
import {registerables} from 'chart.js'









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
    QRCodeModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,





  ]
})
export class ReservationModule { }
