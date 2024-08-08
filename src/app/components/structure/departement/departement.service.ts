import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { Departement } from '../../../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  apiUrl = AppConfig.apiUrl + '/departements';
  constructor(private http: HttpClient) { }

  findAll():Observable<Departement[]> {
    return this.http.get<Departement[]>(this.apiUrl);
  }

  findById(id: number): Observable<Departement> {
    return this.http.get<Departement>(this.apiUrl + '/' + id);
  }

  add(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(this.apiUrl, departement);
  }

  update(departement: Departement): Observable<Departement> {
    return this.http.put<Departement>(
      this.apiUrl + '/' + departement.id,
      departement
    );
  }

  delete(id: number): Observable<Departement> {
    return this.http.delete<Departement>(this.apiUrl + '/' + id);
  }
}
