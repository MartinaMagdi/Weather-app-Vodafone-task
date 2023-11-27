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
  originalCities: City[] = [];
  selectedTempType: string = 'celsius';
  selectedCity!: number;
  citiesList: any[] = [];
  selectedDate!: any;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.selectedCity = 0;
    this.selectedDate = 0;
    this.weatherService.getAll().subscribe((data: any) => {
      this.cities = data;
      this.originalCities = data
      this.setCitiesList();
      this.filterCitiesWithDate();
    });
  }

  filterCitiesWithDate(passedDate?: any) {
    let currentDate: any;
    passedDate ? (currentDate = passedDate) : (currentDate = new Date(0));

    this.cities.forEach((city: any) => {
      city.forecast.forEach((forecast: any) => {
        if (passedDate) {
          if (forecast.date == currentDate) {
            city.forecast = [];
            city.forecast.push(forecast);
          }
        } else {
          let date = new Date(forecast.date);
          if (date > currentDate) {
            city.forecast = [];
            city.forecast.push(forecast);
          }
        }
      });
    });
  }

  setCitiesList() {
    this.cities.forEach((city) => {
      this.citiesList.push({ id: city.id, city: city.city });
    });
  }

  getCity() {
    if (this.selectedCity == 0) {
      this.cities = this.originalCities
    } else {
      this.weatherService
        .getCityForecast(this.selectedCity)
        .subscribe((data: any) => {
          this.cities = [];
          this.cities.push(data);
        });
    }
  }

  applyDateFiltration() {
    const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    this.filterCitiesWithDate(formattedDate);
  }
}
