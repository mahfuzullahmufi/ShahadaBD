import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusketService } from 'src/app/busket/busket.service';
import { IBusket } from 'src/app/shared/models/busket.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  busket$: Observable<IBusket>;
  //currentUser$: Observable<IUser>;

  constructor(
    private busketService: BusketService, 
    //private accountService: AccountService
    ) { }

  ngOnInit(): void {
    this.busket$ = this.busketService.busket$;
    //this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    //this.accountService.logout();
  }

}
