import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreListComponent } from './chambre-list/chambre-list.component';


@NgModule({
  declarations: [
    ChambreListComponent
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule
  ]
})
export class ChambreModule { }
