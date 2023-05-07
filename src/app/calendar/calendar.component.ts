import { Component } from '@angular/core';
import { MatCalendarCellCssClasses} from "@angular/material/datepicker";
import { ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent {
  // @ts-ignore
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;

  name: string = '';
  phone: string = '';
  selected: Date = new Date();
  constructor() {}

  // @ts-ignore
  bookedDates: BookedDate[] = JSON.parse(localStorage.getItem('bookedDates')) || [];
  onSubmit() {
     // @ts-ignore
    const booking = {
        date: this.selected.toUTCString(),
        name: this.name,
        phone: this.phone,
        accept: false
      };
      // @ts-ignore
      this.bookedDates.push(booking);
     localStorage.setItem('bookedDates', JSON.stringify(this.bookedDates));
    this.name = '';
    this.phone = '';
    this.selected = new Date();
    this.calendar.updateTodaysDate();
  }
  dateClass(dates: Date): MatCalendarCellCssClasses {
    const classes: MatCalendarCellCssClasses = {};
    let clas=false;
    // @ts-ignore
    JSON.parse(localStorage.getItem('bookedDates')).map((n)=>{
      if(new Date(n.date).toISOString().slice(0, 10)===new Date(dates).toISOString().slice(0, 10)&&n.accept){
        clas=true;
      }
    })
    classes['available'] = clas;
    return classes;
  }


  onDateSelected(date: Date|null) {
    if(date) {
      this.selected = date;
    }
  }

}
