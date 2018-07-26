import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Crew } from './crew';
import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) { }
  private crewsUrl = 'http://localhost:63674/api/Aircrews';

  getAll(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.crewsUrl);
  }

  getById(id: number): Observable<Crew> {
    const url = `${this.crewsUrl}/${id}`;
    return this.http.get<Crew>(url);
  }

  delete(crew: Crew | number): Observable<Crew> {
    const id = typeof crew === 'number' ? crew : crew.id;
    const url = `${this.crewsUrl}/${id}`;
    return this.http.delete<Crew>(url, httpOptions);
  }

  create(crew: Crew): Observable<Crew> {
    return this.http.post<Crew>(this.crewsUrl, crew, httpOptions);
  }

  update(crew: Crew): Observable<any> {
    const id = crew.id;
    const url = `${this.crewsUrl}/${id}`;
    return this.http.put(url, crew, httpOptions);
  }
}
