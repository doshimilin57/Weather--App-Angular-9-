******** Task Description ********

* Get weather info for a given location for today and same time in the previous "N" years.

* Build a UI that will consume the weather API (provided below), extract the required details and show the results:

-> Inputs: Latitude, Longitude, Number of Years (MAX 5)
-> Perform Validations
-> Invoke the weather API, as many times as needed
-> Show the following details for each year on the UI.
   *Date, Time, Temperature, SunriseTime, SunsetTime
-> Also show location in a map using google map API
-> It has to be responsive


* Use the following Public API to get the data
https://api.darksky.net/forecast/<secretkey>/<lat>,<long>,<epochtime>



# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
