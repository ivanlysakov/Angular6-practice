import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirplaneDetailComponent } from '../featureComponents/airplanes/airplane-detail/airplane-detail.component';
import { airportComponents } from '../featureComponents/export';

@NgModule({
  imports: [
    CommonModule,
   ...airportComponents
  ],
  declarations: [AirplaneDetailComponent]
})
export class AirportModule { }
