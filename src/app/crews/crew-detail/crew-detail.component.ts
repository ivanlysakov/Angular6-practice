import { Component, OnInit, Input } from '@angular/core';
import { Crew } from '../crew';
import { ActivatedRoute } from '@angular/router';
import { CrewService } from '../crew.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  @Input() crew: Crew;
  

  constructor(
    private route: ActivatedRoute,
    private service: CrewService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(crew => this.crew = crew);

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.crew)
      .subscribe(() => this.goBack());
  }

}
