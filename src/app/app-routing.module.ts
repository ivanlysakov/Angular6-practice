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
import { InitialComponent } from './core/initial/initial.component';
import { AirplaneDetailComponent } from './airplanes/airplane-detail/airplane-detail.component';
import { PilotDetailComponent } from './pilots/pilot-detail/pilot-detail.component';
import { TypeDetailComponent } from './types/type-detail/type-detail.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: InitialComponent},
  { path: 'Airplanes', component: AirplanesListComponent },
  { path: 'Airplanes/:id', component: AirplaneDetailComponent },
  { path: 'Pilots', component: PilotsListComponent },
  { path: 'Pilots/:id', component: PilotDetailComponent },
  { path: 'Types', component: TypesListComponent },
  { path: 'Types/:id', component: TypeDetailComponent },


  { path: 'Crews', component: CrewsListComponent },
  


  { path: 'Hostesses', component: HostessesListComponent },
  { path: 'Departures', component: DeparturesListComponent },
  { path: 'Flights', component: FlightsListComponent },
  { path: 'Tickets', component: TicketsListComponent },
  { path: 'Tickets/:id', component: TicketDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
