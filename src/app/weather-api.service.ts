import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  private proxy = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getWeatherInfo(locationParams: any) {
    return this.http.get(
      this.proxy + 'https://api.darksky.net/forecast/0b67f8f549800f7bdeccc85500ba9324/' + locationParams
    );
  }
}
