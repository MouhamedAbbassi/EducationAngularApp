import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ReservationComponent } from './reservation/reservation.component';
import {AddReservationComponent} from "./add-reservation/add-reservation.component";
import {UpdateReservationComponent} from "./update-reservation/update-reservation.component";
=======
import { ReservationComponent } from './reservation-List/reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
>>>>>>> ea09540995da44f5173cec1571789c7f55553326

const routes: Routes = [
  {path:"list", component:ReservationComponent},
  {path:'list/add',component: AddReservationComponent},
<<<<<<< HEAD
  //{path:'list/chart',component: ChartDemoComponent},

  { path:'list/update-reservation/:idReservation', component: UpdateReservationComponent },
=======
  {path:'list/chart',component: ChartDemoComponent},

  { path:'list/update-reservation/:idReservation', component: UpdateReservationComponent },


>>>>>>> ea09540995da44f5173cec1571789c7f55553326

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {


 }
