import { Component, Input, OnInit } from '@angular/core';
import { BusketService } from 'src/app/busket/busket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private basketService: BusketService) { }

  ngOnInit(): void {
  }

  addItemToBasket() {
    this.basketService.addItemToBusket(this.product);
  }

}
