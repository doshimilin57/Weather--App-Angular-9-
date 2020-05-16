import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
