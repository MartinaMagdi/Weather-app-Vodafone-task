import { TestBed } from '@angular/core/testing';

import { WeatherAPIsService } from './weather-apis.service';

describe('WeatherAPIsService', () => {
  let service: WeatherAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
