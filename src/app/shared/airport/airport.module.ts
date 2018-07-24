import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { airportComponents, airportDirectives } from '../featureComponents/export';

@NgModule({
  imports: [
    CommonModule,
   
  ],
  declarations: [...airportComponents],
  providers: [...airportDirectives]
})
export class AirportModule { }
