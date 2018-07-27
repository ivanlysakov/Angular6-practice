import { Component, OnInit,Input } from '@angular/core';
import { AirplaneType } from '../type';
import { ActivatedRoute } from '@angular/router';
import { TypeService } from '../type.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.css']
})
export class TypeDetailComponent implements OnInit {
  @Input() type: AirplaneType;

  constructor(
    private route: ActivatedRoute,
    private service: TypeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(type => this.type = type);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.type)
      .subscribe(() => this.goBack());
  }

}
