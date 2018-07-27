import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirplaneType } from './type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http: HttpClient) { }

  private typesUrl = 'http://localhost:63674/api/AirplaneTypes';

  getAll(): Observable<AirplaneType[]> {
    return this.http.get<AirplaneType[]>(this.typesUrl);
  }

  getById(id: number): Observable<AirplaneType> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<AirplaneType>(url);
  }

  delete(type: AirplaneType | number): Observable<AirplaneType> {
    const id = typeof type === 'number' ? type : type.id;
    const url = `${this.typesUrl}/${id}`;
    return this.http.delete<AirplaneType>(url, httpOptions);

  }
  create(type: AirplaneType): Observable<AirplaneType> {
    return this.http.post<AirplaneType>(this.typesUrl, type, httpOptions);
  }

  update(type: AirplaneType): Observable<any> {
    const id = type.id;
    const url = `${this.typesUrl}/${id}`;
    return this.http.put(url, type, httpOptions);
  }

}

