import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from "@angular/material/datepicker";
import { ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';

interface BookedDate {
  date: string;
  name: string;
  phone: string;
  accept: boolean;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;

  name: string = '';
  phone: string = '';
  selected: Date = new Date();
  bookedDates: BookedDate[] = JSON.parse(localStorage.getItem('bookedDates') || '[]');
  constructor() {}

  onSubmit() {
    console.log(this.bookedDates);
    const booking: BookedDate = {
      date: this.selected.toISOString(),
      name: this.name,
      phone: this.phone,
      accept: false
    };

    this.bookedDates.push(booking);
    localStorage.setItem('bookedDates', JSON.stringify(this.bookedDates));

    this.name = '';
    this.phone = '';
    this.selected = new Date();
    this.calendar.updateTodaysDate();
  }

  dateClass(dates: Date): MatCalendarCellCssClasses {
    const classes: MatCalendarCellCssClasses = {};
    const selectedDate = new Date(dates).toISOString().slice(0, 10);
    let bookedDate;
    const bookedDates: BookedDate[] = JSON.parse(localStorage.getItem('bookedDates') || '[]');

    if (Array.isArray(bookedDates)) {
      // @ts-ignore
      bookedDate = bookedDates.find((date) => {
        const bookedDate = new Date(date.date).toISOString().slice(0, 10);
        return bookedDate === selectedDate && date.accept;
      });
    }
    if (bookedDate) {
      classes['available'] = true;
    }

    return classes;
  }

  onDateSelected(date: Date | null) {
    if (date) {
      this.selected = date;
    }
  }
}