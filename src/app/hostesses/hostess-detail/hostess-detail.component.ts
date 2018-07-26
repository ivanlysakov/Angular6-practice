import { Component, OnInit, Input } from '@angular/core';
import { Hostess } from '../hostess';
import { ActivatedRoute } from '@angular/router';
import { HostessService } from '../hostess.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hostess-detail',
  templateUrl: './hostess-detail.component.html',
  styleUrls: ['./hostess-detail.component.css']
})
export class HostessDetailComponent implements OnInit {

  @Input() hostess: Hostess;

  constructor(
    private route: ActivatedRoute,
    private service: HostessService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(hostess => this.hostess = hostess);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.hostess)
      .subscribe(() => this.goBack());
  }

}
