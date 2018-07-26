import { Component, OnInit } from '@angular/core';
import { Hostess } from '../hostess';
import { HostessService } from '../hostess.service';

@Component({
  selector: 'app-hostesses-list',
  templateUrl: './hostesses-list.component.html',
  styleUrls: ['./hostesses-list.component.css']
})
export class HostessesListComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public birthday: string;
 
  hostesses: Hostess[];
  selectedHostess: Hostess;

  constructor(private hostessService: HostessService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.hostessService.getAll().subscribe((hostesses) => {
      this.hostesses = hostesses;
      console.log(hostesses);
    });
  }


  delete(hostess: Hostess): void {
    this.hostesses = this.hostesses.filter(h => h !== hostess);
    this.hostessService.delete(hostess).subscribe();
  }

  addAirplane(): void {
    let hostess = new Hostess(this.firstname, this.lastname, this.birthday)
    this.hostessService.create(hostess)
      .subscribe(hostess => {
        this.hostesses.push(hostess);
      });
  }

}
