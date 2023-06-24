import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusketComponent } from './busket/busket.component';

const routes: Routes = [
  {path: '', component: BusketComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusketRoutingModule { }
