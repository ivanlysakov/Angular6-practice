import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from './pilot';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  constructor(private http: HttpClient) { }

  private pilotsUrl = 'http://localhost:63674/api/Pilots';

  getAll(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.pilotsUrl);
  }

  getById(id: number): Observable<Pilot> {
    const url = `${this.pilotsUrl}/${id}`;
    return this.http.get<Pilot>(url);
  }

  delete(pilot: Pilot | number): Observable<Pilot> {
    const id = typeof pilot === 'number' ? pilot : pilot.id;
    const url = `${this.pilotsUrl}/${id}`;
    return this.http.delete<Pilot>(url, httpOptions);

  }
  create(pilot: Pilot): Observable<Pilot> {
    return this.http.post<Pilot>(this.pilotsUrl, pilot, httpOptions);
  }

  update(pilot: Pilot): Observable<any> {
    const id = pilot.id;
    const url = `${this.pilotsUrl}/${id}`;
    return this.http.put(url, pilot, httpOptions);
  }

}

