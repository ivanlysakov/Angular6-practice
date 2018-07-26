import { Component, OnInit,Input } from '@angular/core';
import { Pilot } from '../pilot';
import { ActivatedRoute } from '@angular/router';
import { PilotService } from '../pilot.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {
  @Input() pilot: Pilot;

  constructor(
    private route: ActivatedRoute,
    private service: PilotService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(pilot => this.pilot = pilot);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.pilot)
      .subscribe(() => this.goBack());
  }

}
