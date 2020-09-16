import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //implicit type TS feature(homelikes type is number)
  homeLikes = 1000;
  constructor() { }

  ngOnInit() {
  }

}
