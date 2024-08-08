import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { JustificationDepense } from '../../../models/justification-depense.model';

@Injectable({
  providedIn: 'root'
})
export class JustificationDepenseService {

  apiUrl = AppConfig.apiUrl + '/justification-depenses';
  constructor(private http: HttpClient) { }

  findAll():Observable<JustificationDepense[]> {
    return this.http.get<JustificationDepense[]>(this.apiUrl);
  }

  findById(id: number): Observable<JustificationDepense> {
    return this.http.get<JustificationDepense>(this.apiUrl + '/' + id);
  }

  add(justificationDepense: JustificationDepense): Observable<JustificationDepense> {
    return this.http.post<JustificationDepense>(this.apiUrl, justificationDepense);
  }

  update(justificationDepense: JustificationDepense): Observable<JustificationDepense> {
    return this.http.put<JustificationDepense>(
      this.apiUrl + '/' + justificationDepense.id,
      justificationDepense
    );
  }

  delete(id: number): Observable<JustificationDepense> {
    return this.http.delete<JustificationDepense>(this.apiUrl + '/' + id);
  }
}
