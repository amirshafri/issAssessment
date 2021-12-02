import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherService } from '../service/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private appId: string;
  private appCode: string;
  cityname:string;
  public weather: any;

  public constructor(private http: HttpClient, private weatherService: WeatherService) {
    this.appId = "APP-ID-HERE";
    this.appCode = "APP-CODE-HERE";
    this.weather = [];
  }

  public ngOnInit() { }

  public getWeather() {
    this.weatherService.getData(this.cityname).pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
      .subscribe(result => {
        this.weather = result.forecast;
        console.log(this.weather)
      }, error => {
        console.error(error);
      });
  }

}
