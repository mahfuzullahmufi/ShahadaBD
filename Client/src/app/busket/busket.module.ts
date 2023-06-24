import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusketRoutingModule } from './busket-routing.module';
import { BusketComponent } from './busket/busket.component';


@NgModule({
  declarations: [
    BusketComponent
  ],
  imports: [
    CommonModule,
    BusketRoutingModule
  ]
})
export class BusketModule { }
