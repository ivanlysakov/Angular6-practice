import { Component, OnInit } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { AirplaneService } from '../airplane.service';
import { Airplane } from '../airplane';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-airplanes-list',
  templateUrl: './airplanes-list.component.html',
  styleUrls: ['./airplanes-list.component.css']
})
export class AirplanesListComponent implements OnInit {

  airplanes: Airplane[];
  selectedAirplane: Airplane;

  constructor(private http: Http, private service: AirplaneService) { }

  ngOnInit() {
    this.showAirplanes();
  }

  showAirplanes() {
    this.service.getAirplanes().subscribe((airplanes) => {
      this.airplanes = airplanes;
      console.log(airplanes);
    });
  }


  delete(airplane: Airplane): void {
    this.airplanes = this.airplanes.filter(a => a !== airplane);
    this.service.deleteAirplane(airplane).subscribe();
  }

  add(name: string, type: number, lifetime: number): void {
    name = name.trim();
    if (!name) { return; }
    this.service.addAirplane({ name } as Airplane)
      .subscribe(airplane => {
        this.airplanes.push(airplane);
      });
  }


}
