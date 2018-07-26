import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  public number: string;
  public departure: string;
  public departureTime: string;
  public destination: string;
  public arrivalTime: string;

  flights: Flight[];
  selectedFlight: Flight;

  constructor(private flightsService: FlightService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.flightsService.getAll().subscribe((flights) => {
      this.flights = flights;
      console.log(flights);
    });
  }

  delete(flight: Flight): void {
    this.flights = this.flights.filter(f => f !== flight);
    this.flightsService.delete(flight).subscribe();
  }

  create(): void {
    let flights = new Flight(this.number, this.departure, this.departureTime, this.destination, this.arrivalTime)
    this.flightsService.create(flights)
      .subscribe(flights => {
        this.flights.push(flights);
      });
  }

}
