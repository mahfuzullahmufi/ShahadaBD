import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBusket, IBusketItem, IBusketTotals } from 'src/app/shared/models/busket.model';
import { BusketService } from '../busket.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss']
})
export class BusketComponent {

  busket$: Observable<IBusket>;
  busketTotals$: Observable<IBusketTotals>;

  constructor(private busketService: BusketService) { }

  ngOnInit(): void {
    this.busket$ = this.busketService.busket$;
    this.busketTotals$ = this.busketService.busketTotal$;    
  }

  removeBusketItem(item: IBusketItem) {
    this.busketService.removeItemFromBusket(item);
  }

  incrementItemQuantity(item: IBusketItem) {
    this.busketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBusketItem) {
    this.busketService.decrementItemQuantity(item);
  }

}
