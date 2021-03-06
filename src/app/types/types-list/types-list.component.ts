import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type.service';
import { AirplaneType } from '../type';


@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.css']
})
export class TypesListComponent implements OnInit {
  public capacity: number;
  public cargo: number;
  public model: string;
  public airplaneId: number

  types: AirplaneType[];
  selectedType: AirplaneType;

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.typeService.getAll().subscribe((types) => {
      this.types = types;
      console.log(types);
    });
  }

  delete(type: AirplaneType): void {
    this.types = this.types.filter(t => t !== type);
    this.typeService.delete(type).subscribe();
  }

  create(): void {
    let type = new AirplaneType(this.capacity, this.cargo, this.model, this.airplaneId)
    this.typeService.create(type)
      .subscribe(type => {
        this.types.push(type);
      });
  }


}
