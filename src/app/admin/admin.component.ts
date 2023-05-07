import { Component, OnInit } from '@angular/core';

interface BookedDate {
  date: Date;
  name:string;
  phone:string;
  accept:boolean;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  // @ts-ignore
  bookedDates: BookedDate[] = JSON.parse(localStorage.getItem('bookedDates')) || [];

  acceptBooking(booking: BookedDate) {
    booking.accept = true;
    // @ts-ignore
    const bookings = JSON.parse(localStorage.getItem('bookedDates')) || [];
    const index = bookings.findIndex((b: BookedDate) => b.date === booking.date);
    if (index > -1) {
      bookings[index] = booking;
      localStorage.setItem('bookedDates', JSON.stringify(bookings));
    }
  }

  rejectBooking(booking: BookedDate) {
    // @ts-ignore
    const bookings = JSON.parse(localStorage.getItem('bookedDates')) || [];
    const index = bookings.findIndex((b: BookedDate) => b.date === booking.date);
    if (index > -1) {
      bookings.splice(index, 1);
      localStorage.setItem('bookedDates', JSON.stringify(bookings));
    }
  }

  ngOnInit() {
    this.bookedDates = JSON.parse(localStorage.getItem('bookedDates') || '[]');
  }
}
