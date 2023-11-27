import { Component, SimpleChanges } from '@angular/core';
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
  selectedTempType: string = 'celsius';
  selectedCity!: number;
  citiesList: any[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.weatherService.getAll().subscribe((data: any) => {
      this.cities = data;
      this.setCitiesList();
      this.filterCitiesWithLatestDate();
    });
  }

  filterCitiesWithLatestDate() {
    this.cities.forEach((city: any) => {
      city = this.getLatestDate(city)
    });
  }

  getLatestDate(city: any) {
    let currentDate = new Date(0);

    city.forecast.forEach((forecast: any) => {
      let date = new Date(forecast.date);

      if (date > currentDate) {
        currentDate = date;
        city.forecast = [];
        city.forecast.push(forecast);
      }
    });
    return city;
  }

  setCitiesList() {
    this.cities.forEach((city) => {
      this.citiesList.push({ id: city.id, city: city.city });
    });
  }

  getCity() {
    if (this.selectedCity == 0) {
      this.getAll();
    } else {
      this.weatherService
        .getCityForecast(this.selectedCity)
        .subscribe((data: any) => {
          this.cities = [];
          this.cities.push(data);
        });
    }
  }
}
