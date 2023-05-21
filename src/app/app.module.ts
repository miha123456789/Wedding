import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import {NgOptimizedImage} from "@angular/common";
import { CalendarComponent } from './calendar/calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ChatGPTComponent } from './chat-gpt/chat-gpt.component';

const Routes=[
  {path:'',component:HomeComponent},
  {path:'prices',component:PricesComponent},
  {path:'services',component:ServicesComponent},
  {path:'admin',component:AdminComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    PricesComponent,
    CalendarComponent,
    AdminComponent,
    ChatGPTComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(Routes), NgOptimizedImage,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }