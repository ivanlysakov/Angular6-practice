import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportModule } from './shared/airport/airport.module';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AirportModule //add feature module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
