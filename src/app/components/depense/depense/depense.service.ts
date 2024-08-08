import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { Depense } from '../../../models/depense.model';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  apiUrl = AppConfig.apiUrl + '/depenses';
  constructor(private http: HttpClient) { }

  findAll():Observable<Depense[]> {
    return this.http.get<Depense[]>(this.apiUrl);
  }

  findById(id: number): Observable<Depense> {
    return this.http.get<Depense>(this.apiUrl + '/' + id);
  }

  add(depense: Depense): Observable<Depense> {
    return this.http.post<Depense>(this.apiUrl, depense);
  }

  update(depense: Depense): Observable<Depense> {
    return this.http.put<Depense>(
      this.apiUrl + '/' + depense.id,
      depense
    );
  }

  delete(id: number): Observable<Depense> {
    return this.http.delete<Depense>(this.apiUrl + '/' + id);
  }
}
