import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from './flight';
import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  private flightsUrl = 'http://localhost:63674/api/Flights';

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightsUrl);
  }
  
  getById(id: number): Observable<Flight> {
    const url = `${this.flightsUrl}/${id}`;
    return this.http.get<Flight>(url);
  }

  delete(flight: Flight | number): Observable<Flight> {
    const id = typeof flight === 'number' ? flight : flight.id;
    const url = `${this.flightsUrl}/${id}`;
    return this.http.delete<Flight>(url, httpOptions);

  }
  create (flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.flightsUrl, flight, httpOptions);
        
  }

  update (flight: Flight): Observable<any> {
    const id = flight.id;
    const url = `${this.flightsUrl}/${id}`;
    return this.http.put(url, flight, httpOptions);
        
  }
}
