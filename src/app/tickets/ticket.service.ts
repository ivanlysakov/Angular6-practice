import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ticket } from './ticket';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  private ticketsUrl = 'http://localhost:63674/api/Tickets';

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }

  getById(id: number): Observable<Ticket> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.get<Ticket>(url);
  }

  delete(ticket: Ticket | number): Observable<Ticket> {
    const id = typeof ticket === 'number' ? ticket : ticket.id;
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.delete<Ticket>(url, httpOptions);
  }

  create(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.ticketsUrl, ticket, httpOptions);
  }

  update(ticket: Ticket): Observable<any> {
    const id = ticket.id;
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.put(url, ticket, httpOptions);

  }

}

