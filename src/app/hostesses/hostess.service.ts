import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hostess } from './hostess';
import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HostessService {

  constructor(private http: HttpClient) { }

  private hostessUrl = 'http://localhost:63674/api/Airhostesses';

  getAll(): Observable<Hostess[]> {
    return this.http.get<Hostess[]>(this.hostessUrl);
  }

  getById(id: number): Observable<Hostess> {
    const url = `${this.hostessUrl}/${id}`;
    return this.http.get<Hostess>(url);
  }

  delete(hostess: Hostess | number): Observable<Hostess> {
    const id = typeof hostess === 'number' ? hostess : hostess.id;
    const url = `${this.hostessUrl}/${id}`;
    return this.http.delete<Hostess>(url, httpOptions);

  }
  create(hostess: Hostess): Observable<Hostess> {
    return this.http.post<Hostess>(this.hostessUrl, hostess, httpOptions);
  }

  update(hostess: Hostess): Observable<any> {
    const id = hostess.id;
    const url = `${this.hostessUrl}/${id}`;
    return this.http.put(url, hostess, httpOptions);
  }

}


