import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeparturesListComponent } from './shared/featureComponents/departures/departures-list/departures-list.component';
import { DepartureDetailComponent } from './shared/featureComponents/departures/departure-detail/departure-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DeparturesListComponent,
    DepartureDetailComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
