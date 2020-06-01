import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherAPIService } from "../weather-api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  texto: string = 'App';
  lat: any;
  lng: any;
  zoom: number = 15;
  public weatherSearchForm: FormGroup;
  weatherInfoArray = [];
  latitudeRegex = '^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$';
  longitudeRegex = '^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$';

  constructor(
    private formBuilder: FormBuilder,
    private weatherAPIService: WeatherAPIService) {
    this.weatherAPIService = weatherAPIService;
  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      latitude: [''],
      longitude: [''],
      numberOfYears: ['']
    });
  }

  callWeatherAPI(formValues: any) {
    let date = new Date();
    console.log(date);
    let timeStamp = Math.floor(new Date().getTime() / 1000.0);
    console.log(formValues.numberOfYears);
    console.log(formValues);
    this.lat = formValues.latitude;
    this.lng = formValues.longitude;
    let yearInc = formValues.numberOfYears;
    for (let i = 0; i < formValues.numberOfYears; i++) {
      let weatherParams = formValues.latitude + ',' + formValues.longitude + ',' + timeStamp;
      this.weatherAPIService
        .getWeatherInfo(weatherParams)
        .subscribe((success: any) => {
          console.log(success);
          let d = date;
          let ye = date.getFullYear() + yearInc;
          let mo = date.getMonth() + 1;
          let da = date.getDate();
          let formattedDate = mo + "/" + da + "/" + ye;
          success.formattedDate = formattedDate;
          this.weatherInfoArray.push(success);
          yearInc = yearInc - 1;
        });
      date.setMonth(date.getMonth() - 12);
      let updatedTimeStamp = Math.floor(date.getTime() / 1000.0);
      timeStamp = updatedTimeStamp;
      console.log(this.weatherInfoArray);
    }
  }

}
