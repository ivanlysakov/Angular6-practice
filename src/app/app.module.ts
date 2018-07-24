import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';
import { CrewsListComponent } from './crews/crews-list/crews-list.component';
import { CrewDetailComponent } from './crews/crew-detail/crew-detail.component';
import { PilotDetailComponent } from './pilots/pilot-detail/pilot-detail.component';
import { AirplaneDetailComponent } from './airplanes/airplane-detail/airplane-detail.component';
import { AirplanesListComponent } from './airplanes/airplanes-list/airplanes-list.component';
import { TypesListComponent } from './types/types-list/types-list.component';
import { TypeDetailComponent } from './types/type-detail/type-detail.component';
import { HostessDetailComponent } from './hostesses/hostess-detail/hostess-detail.component';
import { HostessesListComponent } from './hostesses/hostesses-list/hostesses-list.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { FlightsListComponent } from './flights/flights-list/flights-list.component';
import { DeparturesListComponent } from './departures/departures-list/departures-list.component';
import { DepartureDetailComponent } from './departures/departure-detail/departure-detail.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { NavigationMenuComponent } from './core/navigation-menu/navigation-menu.component';
import { InitialComponent } from './core/initial/initial.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    PilotsListComponent,
    CrewsListComponent,
    CrewDetailComponent,
    PilotDetailComponent,
    AirplaneDetailComponent,
    AirplanesListComponent,
    TypesListComponent,
    TypeDetailComponent,
    HostessDetailComponent,
    HostessesListComponent,
    FlightDetailComponent,
    FlightsListComponent,
    DeparturesListComponent,
    DepartureDetailComponent,
    TicketDetailComponent,
    TicketsListComponent,
    InitialComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
