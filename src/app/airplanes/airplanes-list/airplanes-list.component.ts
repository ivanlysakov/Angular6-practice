import { Component, OnInit } from '@angular/core';
import { AirplaneService } from '../airplane.service';
import { Airplane } from '../airplane';


@Component({
  selector: 'app-airplanes-list',
  templateUrl: './airplanes-list.component.html',
  styleUrls: ['./airplanes-list.component.css']
})
export class AirplanesListComponent implements OnInit {
  public creationDate: string;
  public typeId: number;
  public lifeTime: number;
  public name: string;

  airplanes: Airplane[];
  selectedAirplane: Airplane;

  constructor(private airplaneService: AirplaneService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.airplaneService.getAll().subscribe((airplanes) => {
      this.airplanes = airplanes;
      console.log(airplanes);
    });
  }

  delete(airplane: Airplane): void {
    this.airplanes = this.airplanes.filter(a => a !== airplane);
    this.airplaneService.delete(airplane).subscribe();
  }

  create(): void {
    let plane = new Airplane(this.name, this.typeId, this.lifeTime, this.creationDate)
    this.airplaneService.create(plane)
      .subscribe(plane => {
        this.airplanes.push(plane);
      });
  }


}
