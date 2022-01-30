import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adresses-field',
  templateUrl: './adresses-field.component.html',
  styleUrls: ['./adresses-field.component.css'],
})
export class AdressesFieldComponent implements OnInit {
  @Input() addresses: string[] = [];
  @Output() newAddresses: EventEmitter<string[]> = new EventEmitter();
  inputAddress: string = '';

  addAddress(address: string) {
    this.addresses = [...this.addresses, address];
    this.newAddresses.emit(this.addresses);
    this.inputAddress = '';
  }

  deleteAddress(address: string) {
    this.addresses = this.addresses.filter(
      (addressElement) => addressElement !== address
    );
    this.newAddresses.emit(this.addresses);
  }

  ngOnInit(): void {}
}
