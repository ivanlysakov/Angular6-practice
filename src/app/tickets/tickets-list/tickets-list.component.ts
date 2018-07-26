import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  public price: number;
  public flightNumber: string;
 
  

  tickets: Ticket[];
  selectedTicket: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets;
      console.log(tickets);
    });
  }

  delete(ticket: Ticket): void {
    this.tickets = this.tickets.filter(a => a !== ticket);
    this.ticketService.delete(ticket).subscribe();
  }

  create(): void {
    let ticket = new Ticket(this.price, this.flightNumber)
    this.ticketService.create(ticket)
      .subscribe(plane => {
        this.tickets.push(ticket);
      });
  }
}
