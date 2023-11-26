import { Component, Input } from '@angular/core';
import { City } from 'src/app/Interfaces/city';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() city!: any;
  @Input() tempType!: any;
}
