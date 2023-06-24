import { Component, OnInit } from '@angular/core';
import { BusketService } from './busket/busket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'ShahadaBD';

  constructor(
    private busketService: BusketService
  ) { }

  ngOnInit(): void {
    this.loadBusket();
  }

  loadBusket() {
    const busketId = localStorage.getItem('busket_id');
    if (busketId) {
      this.busketService.getBusket(busketId).subscribe(() => {
        console.log('initialised busket');
      }, error => {
        console.log(error);
      })
    }
  }
}
