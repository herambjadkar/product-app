import {Component, OnInit} from '@angular/core';

//this is MVW architecture (Modal View Whatever)

@Component({
  //meta
  selector:'app-root',
  //view/html
  templateUrl:'app.component.html',
  styleUrls:['app.component.scss']
})

export class AppComponent implements OnInit{
  //model attributes
  //bindable to view
  appTitle:string = "Product App";

  constructor(){
    console.log('logged from app component cunstructor')
  }

  ngOnInit(){
    //called once component is loaded
    console.log('logged from app component on init')
  }
}
