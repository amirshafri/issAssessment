import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  constructor(private http: HttpClient) { }
  UrlSatellite: string = "http://localhost:8080/iss/satellites?startTime=";
  getConfig(data) {
    let url = this.UrlSatellite + data;
    return this.http.get<String>(url);
  }
}
