import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/images/showcase.jpg', text: 'Slide 1' },
    { image: 'assets/images/hero1.jpg', text: 'Slide 2' },
    { image: 'assets/images/hero2.jpg', text: 'Slide 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
