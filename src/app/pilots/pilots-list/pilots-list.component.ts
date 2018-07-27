import { Component, OnInit } from '@angular/core';
import { PilotService } from '../pilot.service';
import { Pilot } from '../pilot';


@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  public firstname: string;
  public lastname: string;
  public birthday: string;
  public experience: number;
  public crewId: number
  

  pilots: Pilot[];
  selectedPilot: Pilot;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.pilotService.getAll().subscribe((pilots) => {
      this.pilots = pilots;
      console.log(pilots);
    });
  }


  delete(pilot: Pilot): void {
    this.pilots = this.pilots.filter(p => p !== pilot);
    this.pilotService.delete(pilot).subscribe();
  }

  create(): void {
    let pilot = new Pilot(this.firstname, this.lastname, this.birthday, this.experience, this.crewId)
    this.pilotService.create(pilot)
      .subscribe(pilot => {
        this.pilots.push(pilot);
      });
  }


}
