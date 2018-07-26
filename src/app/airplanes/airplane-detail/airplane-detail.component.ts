import { Component, OnInit, Input } from '@angular/core';
import { Airplane } from '../airplane';
import { AirplaneService } from '../airplane.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-airplane-detail',
  templateUrl: './airplane-detail.component.html',
  styleUrls: ['./airplane-detail.component.css']
})
export class AirplaneDetailComponent implements OnInit {
  @Input() airplane: Airplane;

  constructor(
    private route: ActivatedRoute,
    private service: AirplaneService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(airplane => this.airplane = airplane);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.airplane)
      .subscribe(() => this.goBack());
  }

}
