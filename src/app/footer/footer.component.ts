import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  name: string = '';
  phone: string = '';

  // @ts-ignore
  bookedDates: BookedDate[] = JSON.parse(localStorage.getItem('bookedDates')) || [];

  // @ts-ignore
  onSubmit() {
    // @ts-ignore
    const booking = {
      name: this.name,
      phone: this.phone,
      accept: false
    };
    // @ts-ignore
    this.bookedDates.push(booking);
    localStorage.setItem('bookedDates', JSON.stringify(this.bookedDates));
    this.name = '';
    this.phone = '';
  }
}