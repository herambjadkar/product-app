import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../models/address';
import { ContactComponent } from 'src/app/components/contact/contact.component';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address:Address;

  // Output & Event -> child to parent
  // Emits a custom event
  @Output() contactEvent: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  contact(){
    // trigger an event
    // subscribed by parent component
    // value passed in event is received as $event
    this.contactEvent.emit(this.address);
  }
}
