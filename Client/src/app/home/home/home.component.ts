import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsPerSlide: number;
   slides = [
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'}
  ];

  ngOnInit() {
    this.itemsPerSlide = this.mobileDevice() ? 2 : 4;
  }

  private mobileDevice(): boolean {
    return navigator.userAgent.match(/Android/i)
      ||  navigator.userAgent.match(/webOS/i)
      ||  navigator.userAgent.match(/iPhone/i)
      ||  navigator.userAgent.match(/iPad/i)
      ||  navigator.userAgent.match(/iPod/i)
      ||  navigator.userAgent.match(/BlackBerry/i)
      ||  navigator.userAgent.match(/Windows Phone/i)
      ? true : false;
  }

}
