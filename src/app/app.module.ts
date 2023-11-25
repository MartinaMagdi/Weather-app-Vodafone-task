import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonToggleModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
