import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address';
//import { Address } from '../../shared/models/address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mainOffice:Address = undefined;
  headOffice:Address = {
    city:"Delhi",
    state:"Delhi",
    pincode:123456
  };
  branchOffice:Address = {
    city:"Noida",
    state:"UP"
  }

  constructor() { }

  ngOnInit() {
  }
  contactHandler(address: Address){
    console.log('address sent from child component',address);
    alert(JSON.stringify(address));
  }
}
