import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Airplane } from './airplane';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {
  constructor(private http: HttpClient) { }

  private airplanesUrl = 'http://localhost:63674/api/Airplanes';

  getAll(): Observable<Airplane[]> {
    return this.http.get<Airplane[]>(this.airplanesUrl);
  }
  
  getById(id: number): Observable<Airplane> {
    const url = `${this.airplanesUrl}/${id}`;
    return this.http.get<Airplane>(url);
  }

  delete(airplane: Airplane | number): Observable<Airplane> {
    const id = typeof airplane === 'number' ? airplane : airplane.id;
    const url = `${this.airplanesUrl}/${id}`;
    return this.http.delete<Airplane>(url, httpOptions);

  }
  create (airplane: Airplane): Observable<Airplane> {
    return this.http.post<Airplane>(this.airplanesUrl, airplane, httpOptions);
        
  }

  update (airplane: Airplane): Observable<any> {
    const id = airplane.id;
    const url = `${this.airplanesUrl}/${id}`;
    return this.http.put(url, airplane, httpOptions);
        
  }

}

