import { Component } from '@angular/core';
import { WeatherAPIsService } from './services/weather-apis.service';
import { City } from './Interfaces/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private weatherService: WeatherAPIsService) {}

  cities: City[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.weatherService.getAll().subscribe((data: any) => {
      this.cities = data;
      console.log(this.cities);
    });
  }
}
