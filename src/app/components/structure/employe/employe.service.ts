import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { Employe } from '../../../models/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  apiUrl = AppConfig.apiUrl + '/employes';
  constructor(private http: HttpClient) { }

  findAll():Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  findById(id: number): Observable<Employe> {
    return this.http.get<Employe>(this.apiUrl + '/' + id);
  }

  add(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl, employe);
  }

  update(employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(
      this.apiUrl + '/' + employe.id,
      employe
    );
  }

  delete(id: number): Observable<Employe> {
    return this.http.delete<Employe>(this.apiUrl + '/' + id);
  }
}
