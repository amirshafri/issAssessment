import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { MomentPipe } from './moment.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapComponent,
    WeatherComponent,
    FahrenheitPipe,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule ,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
