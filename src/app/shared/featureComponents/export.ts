import { TypeDetailComponent } from "./types/type-detail/type-detail.component";
import { TypesListComponent } from "./types/types-list/types-list.component";
import { FlightDetailComponent } from "./flights/flight-detail/flight-detail.component";
import { TicketDetailComponent } from "./tickets/ticket-detail/ticket-detail.component";
import { CrewDetailComponent } from "./crews/crew-detail/crew-detail.component";
import { AirplaneDetailComponent } from "./airplanes/airplane-detail/airplane-detail.component";
import { DepartureDetailComponent } from "./departures/departure-detail/departure-detail.component";
import { HostessDetailComponent } from "./hostesses/hostess-detail/hostess-detail.component";
import { PilotDetailComponent } from "./pilots/pilot-detail/pilot-detail.component";
import { CrewsListComponent } from "./crews/crews-list/crews-list.component";
import { TicketsListComponent } from "./tickets/tickets-list/tickets-list.component";
import { HostessesListComponent } from "./hostesses/hostesses-list/hostesses-list.component";
import { FlightsListComponent } from "./flights/flights-list/flights-list.component";
import { AirplanesListComponent } from "./airplanes/airplanes-list/airplanes-list.component";
import { DeparturesListComponent } from "./departures/departures-list/departures-list.component";
import { PilotsListComponent } from "./pilots/pilots-list/pilots-list.component";
import { AirplaneService } from "../services/airplane.service";
import { TypeService } from "../services/type.service";
import { CrewService } from "../services/crew.service";
import { PilotService } from "../services/pilot.service";
import { HostessService } from "../services/hostess.service";
import { DepartureService } from "../services/departure.service";
import { FlightService } from "../services/flight.service";
import { TicketService } from "../services/ticket.service";

export const airportComponents = [
  TypeDetailComponent,
  TicketDetailComponent,
  CrewDetailComponent,
  AirplaneDetailComponent,
  FlightDetailComponent,
  DepartureDetailComponent,
  HostessDetailComponent,
  PilotDetailComponent,
  TypesListComponent,
  TicketsListComponent,
  CrewsListComponent,
  AirplanesListComponent,
  FlightsListComponent,
  DeparturesListComponent,
  HostessesListComponent,
  PilotsListComponent
];

export const airportDirectives = [
  AirplaneService,
  TypeService,
  CrewService,
  PilotService,
  HostessService,
  DepartureService,
  FlightService,
  TicketService
];

export const airportPipes = [
  
];