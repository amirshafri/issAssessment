import { HttpClient } from '@angular/common/http';
import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData(data): Observable<string> {
    let url = environment.serviceip + "weather/getForecastForCity?cityName=" + data;
    return this.http.get<string>(url);
  }
}
