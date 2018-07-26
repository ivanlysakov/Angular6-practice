import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';
import { Crew } from '../crew';

@Component({
  selector: 'app-crews-list',
  templateUrl: './crews-list.component.html',
  styleUrls: ['./crews-list.component.css']
})
export class CrewsListComponent implements OnInit {
  public crewNumber: number;
  
  crews: Crew[];
  selectedCrew: Crew;

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.crewService.getAll().subscribe((tickets) => {
      this.crews = tickets;
      console.log(tickets);
    });
  }

  delete(crew: Crew): void {
    this.crews = this.crews.filter(c => c !== crew);
    this.crewService.delete(crew).subscribe();
  }

  create(): void {
    let crew = new Crew(this.crewNumber)
    this.crewService.create(crew)
      .subscribe(plane => {
        this.crews.push(crew);
      });
  }

}
