import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusketRoutingModule } from './busket-routing.module';
import { BusketComponent } from './busket/busket.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BusketComponent
  ],
  imports: [
    CommonModule,
    BusketRoutingModule,
    SharedModule
  ]
})
export class BusketModule { }
