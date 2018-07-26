import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flight: Flight;
 

  constructor(
    private route: ActivatedRoute,
    private service: FlightService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(flight => this.flight = flight); 
      
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.flight)
      .subscribe(() => this.goBack());
  }
}
