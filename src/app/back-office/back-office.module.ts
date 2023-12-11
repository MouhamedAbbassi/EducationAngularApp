import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { HomeBackComponent } from './home-back/home-back.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { BlocModule } from './bloc/bloc.module';
import {HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { ReservationModule } from './reservation/reservation.module';






@NgModule({
  declarations: [



    BackOfficeComponent,
            HomeBackComponent,
            SidebarComponent,
            NavComponent,
         ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    BlocModule,
    ReservationModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class BackOfficeModule { }
