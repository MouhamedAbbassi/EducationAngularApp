import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FrontOfficeModule } from './front-office/front-office.module';
import { BackOfficeModule } from './back-office/back-office.module';
import { UserModule } from './user/user.module';
import { AddReservationComponent } from './back-office/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './back-office/reservation/update-reservation/update-reservation.component';
import { QRCodeModule } from 'angularx-qrcode';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartDemoComponent } from './back-office/reservation/chart-demo/chart-demo.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {authInterceptorProviders} from "./helper/auth.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    ChartDemoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FrontOfficeModule,
    BackOfficeModule,
    UserModule,
    FormsModule,
    QRCodeModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      // Toastr configuration options
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
