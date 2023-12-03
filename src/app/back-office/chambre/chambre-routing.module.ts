import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambreListComponent } from './chambre-list/chambre-list.component';

const routes: Routes = [
  {path:"chambrelist", component:ChambreListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
