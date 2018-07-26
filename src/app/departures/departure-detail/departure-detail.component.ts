import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Departure } from '../departure';
import { ActivatedRoute } from '@angular/router';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.css']
})
export class DepartureDetailComponent implements OnInit {

  @Input() departure: Departure;
 

  constructor(
    private route: ActivatedRoute,
    private service: DepartureService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(departure => this.departure = departure); 
      
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.departure)
      .subscribe(() => this.goBack());
  }

}
