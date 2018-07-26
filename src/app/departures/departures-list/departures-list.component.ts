import { Component, OnInit } from '@angular/core';
import { Departure } from '../departure';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departures-list',
  templateUrl: './departures-list.component.html',
  styleUrls: ['./departures-list.component.css']
})
export class DeparturesListComponent implements OnInit {

  public flightNumber: string;
  public time: string;

  departures: Departure[];
  selectedDeparture: Departure;

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.departureService.getAll().subscribe((departures) => {
      this.departures = departures;
      console.log(departures);
    });
  }

  delete(departure: Departure): void {
    this.departures = this.departures.filter(d => d !== departure);
    this.departureService.delete(departure).subscribe();
  }

  create(): void {
    let departures = new Departure(this.flightNumber, this.time)
    this.departureService.create(departures)
      .subscribe(departures => {
        this.departures.push(departures);
      });
  }

}
