import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplanesListComponent } from './airplanes/airplanes-list/airplanes-list.component';
import { TypesListComponent } from './types/types-list/types-list.component';
import { CrewsListComponent } from './crews/crews-list/crews-list.component';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';
import { HostessesListComponent } from './hostesses/hostesses-list/hostesses-list.component';
import { DeparturesListComponent } from './departures/departures-list/departures-list.component';
import { FlightsListComponent } from './flights/flights-list/flights-list.component';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { AppComponent } from './app.component';
import { InitialComponent } from './core/initial/initial.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: InitialComponent},
  { path: 'Airplanes', component: AirplanesListComponent },
  { path: 'Types', component: TypesListComponent },
  { path: 'Crews', component: CrewsListComponent },
  { path: 'Pilots', component: PilotsListComponent },
  { path: 'Hostesses', component: HostessesListComponent },
  { path: 'Departures', component: DeparturesListComponent },
  { path: 'Flights', component: FlightsListComponent },
  { path: 'Tickets', component: TicketsListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
