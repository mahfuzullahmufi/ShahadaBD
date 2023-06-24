import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Busket, IBusket, IBusketItem, IBusketTotals } from '../shared/models/busket.model';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BusketService {

  baseUrl = environment.apiUrl;
  private busketSource = new BehaviorSubject<IBusket>(null);
  busket$ = this.busketSource.asObservable();
  private busketTotalSource = new BehaviorSubject<IBusketTotals>(null);
  busketTotal$ = this.busketTotalSource.asObservable();
  shipping : number = 0;

  constructor(private http: HttpClient) { }

  createPaymentIntent() {
    return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBusketValue().id, {})
      .pipe(
        map((busket: IBusket) => {
          this.busketSource.next(busket);
          console.log(this.getCurrentBusketValue());
        })
      )
  }
  
  // setShippingPrice(deliveryMethod: IDeliveryMethod) {
  //   this.shipping = deliveryMethod.price;
  //   const busket = this.getCurrentBusketValue();
  //   busket.deliveryMethodId = deliveryMethod.id;
  //   busket.shippingPrice = deliveryMethod.price;
  //   this.calculateTotals();
  //   this.setBusket(busket);
  // }
  
  getBusket(id: string) {
    return this.http.get(this.baseUrl + 'busket?id=' + id)
      .pipe(
        map((busket: IBusket) => {
          this.busketSource.next(busket);
          this.shipping = busket.shippingPrice;
          this.calculateTotals();
        })
      )
  }

  setBusket(busket: IBusket) {
    return this.http.post(this.baseUrl + 'busket', busket).subscribe((response: IBusket) => {
      console.log(response);
      
      this.busketSource.next(response);
      this.calculateTotals();
    }, error => {
      console.log(error);
    })
  }

  getCurrentBusketValue() {
    return this.busketSource.value;
  }

  addItemToBusket(item: IProduct, quantity = 1) {
    const itemToAdd: IBusketItem = this.mapProductItemToBusketItem(item, quantity);
    const busket = this.getCurrentBusketValue() ?? this.createBusket();
    busket.items = this.addOrUpdateItem(busket.items, itemToAdd, quantity);
    this.setBusket(busket);
  }

  incrementItemQuantity(item: IBusketItem) {
    const busket = this.getCurrentBusketValue();
    const foundItemIndex = busket.items.findIndex(x => x.id === item.id);
    busket.items[foundItemIndex].quantity++;
    this.setBusket(busket);
  }

  decrementItemQuantity(item: IBusketItem) {
    const busket = this.getCurrentBusketValue();
    const foundItemIndex = busket.items.findIndex(x => x.id === item.id);
    if (busket.items[foundItemIndex].quantity > 1) {
      busket.items[foundItemIndex].quantity--;
      this.setBusket(busket);
    } else {
      this.removeItemFromBusket(item);
    }
  }

  removeItemFromBusket(item: IBusketItem) {
    const busket = this.getCurrentBusketValue();
    if (busket.items.some(x => x.id === item.id)) {
      busket.items = busket.items.filter(i => i.id !== item.id);
      if (busket.items.length > 0) {
        this.setBusket(busket);
      } else {
        this.deleteBusket(busket); 
      }
    }
  }

  deleteLocalBusket(id: string) {
    this.busketSource.next(null);
    this.busketTotalSource.next(null);
    localStorage.removeItem('busket_id');
  }

  deleteBusket(busket: IBusket) {
    return this.http.delete(this.baseUrl + 'busket?id=' + busket.id).subscribe(() => {
      this.busketSource.next(null);
      this.busketTotalSource.next(null);
      localStorage.removeItem('busket_id');
    }, error => {
      console.log(error);
    })
  }

  private calculateTotals() {
    const busket = this.getCurrentBusketValue();
    //const shipping = this.shipping;
    const shipping = 0;
    const subtotal = busket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    const total = subtotal + shipping;
    this.busketTotalSource.next({shipping, total, subtotal});
    console.log(this.busketTotalSource);
    
  }


  private addOrUpdateItem(items: IBusketItem[], itemToAdd: IBusketItem, quantity: number): IBusketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private createBusket(): IBusket {
    const busket = new Busket();
    localStorage.setItem('busket_id', busket.id);
    return busket;
  }

  private mapProductItemToBusketItem(item: IProduct, quantity: number): IBusketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    }
  }
}
