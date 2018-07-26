import { Injectable } from '@angular/core';
import { Departure } from './departure';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  constructor(private http: HttpClient) { }

  private departuresUrl = 'http://localhost:63674/api/Departures';

  getAll(): Observable<Departure[]> {
    return this.http.get<Departure[]>(this.departuresUrl);
  }

  getById(id: number): Observable<Departure> {
    const url = `${this.departuresUrl}/${id}`;
    return this.http.get<Departure>(url);
  }

  delete(departure: Departure | number): Observable<Departure> {
    const id = typeof departure === 'number' ? departure : departure.id;
    const url = `${this.departuresUrl}/${id}`;
    return this.http.delete<Departure>(url, httpOptions);

  }
  create(departure: Departure): Observable<Departure> {
    return this.http.post<Departure>(this.departuresUrl, departure, httpOptions);
  }

  update(departure: Departure): Observable<any> {
    const id = departure.id;
    const url = `${this.departuresUrl}/${id}`;
    return this.http.put(url, departure, httpOptions);
  }

}
