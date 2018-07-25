import { Component, OnInit } from '@angular/core';
import { AirplaneService } from '../airplane.service';
import { Airplane } from '../airplane';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-airplanes-list',
  templateUrl: './airplanes-list.component.html',
  styleUrls: ['./airplanes-list.component.css']
})
export class AirplanesListComponent implements OnInit {
  public creationDate: string;
  public type: number;
  public lifeTime: number;
  public name: string;

  airplanes: Airplane[];
  selectedAirplane: Airplane;

  constructor(private airplaneService: AirplaneService) { }

  ngOnInit() {
    this.showAirplanes();
  }

  showAirplanes() {
    this.airplaneService.getAirplanes().subscribe((airplanes) => {
      this.airplanes = airplanes;
      console.log(airplanes);
    });
  }


  delete(airplane: Airplane): void {
    this.airplanes = this.airplanes.filter(a => a !== airplane);
    this.airplaneService.deleteAirplane(airplane).subscribe();
  }

  addAirplane(): void {
    let plane = new Airplane(this.name, this.type, this.lifeTime, this.creationDate)
    this.airplaneService.addAirplane(plane)
      .subscribe(plane => {
        this.airplanes.push(plane);
      });
  }


}
