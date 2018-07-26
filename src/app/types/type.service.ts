import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from './type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http: HttpClient) { }

  private typesUrl = 'http://localhost:63674/api/AirplaneTypes';

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesUrl);
  }

  getById(id: number): Observable<Type> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Type>(url);
  }

  delete(type: Type | number): Observable<Type> {
    const id = typeof type === 'number' ? type : type.id;
    const url = `${this.typesUrl}/${id}`;
    return this.http.delete<Type>(url, httpOptions);

  }
  create(type: Type): Observable<Type> {
    return this.http.post<Type>(this.typesUrl, type, httpOptions);
  }

  update(type: Type): Observable<any> {
    const id = type.id;
    const url = `${this.typesUrl}/${id}`;
    return this.http.put(url, type, httpOptions);
  }

}

