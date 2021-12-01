import { Component, OnInit } from '@angular/core';
import { SatelliteService } from '../service/satelliteService/satellite.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private satelitteService:SatelliteService) { }
  userDateTime: any;
  ngOnInit() {
  }

  getData(){
    console.log(this.userDateTime)
    let newDate:Date = new Date(this.userDateTime);
    console.log(newDate.getTime())
    let data:number = newDate.getTime()/1000;
    this.satelitteService.getConfig(data).subscribe(result=>{
      console.log(result);
    });
  }

}
