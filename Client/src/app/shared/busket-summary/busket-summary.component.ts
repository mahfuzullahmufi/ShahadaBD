import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBusketItem } from '../models/busket.model';

@Component({
  selector: 'app-busket-summary',
  templateUrl: './busket-summary.component.html',
  styleUrls: ['./busket-summary.component.scss']
})
export class BusketSummaryComponent {
  @Output() decrement: EventEmitter<IBusketItem> = new EventEmitter<IBusketItem>();
  @Output() increment: EventEmitter<IBusketItem> = new EventEmitter<IBusketItem>();
  @Output() remove: EventEmitter<IBusketItem> = new EventEmitter<IBusketItem>();
  @Input() isBusket = true;
  @Input() items: any;
  @Input() isOrder = false;

  constructor() { }

  ngOnInit(): void {
  }

  decrementItemQuantity(item: IBusketItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBusketItem) {
    this.increment.emit(item);
  }

  removeBusketItem(item: IBusketItem) {
    this.remove.emit(item);
  }

}
