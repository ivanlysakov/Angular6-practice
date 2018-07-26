import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../ticket';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';



@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket: Ticket;
  
  constructor(
    private route: ActivatedRoute,
    private service: TicketService,
    private location: Location
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(id)
      .subscribe(ticket => this.ticket = ticket);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.ticket)
      .subscribe(() => this.goBack());
  }

}
