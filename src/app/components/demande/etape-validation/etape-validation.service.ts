import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { EtapeValidation } from '../../../models/etape-validation.model';

@Injectable({
  providedIn: 'root'
})
export class EtapeValidationService {

  apiUrl = AppConfig.apiUrl + '/etape-validations';
  constructor(private http: HttpClient) { }

  findAll():Observable<EtapeValidation[]> {
    return this.http.get<EtapeValidation[]>(this.apiUrl);
  }
  
  findById(id: number): Observable<EtapeValidation> {
    return this.http.get<EtapeValidation>(this.apiUrl + '/' + id);
  }

  add(etapeValidation: EtapeValidation): Observable<EtapeValidation> {
    return this.http.post<EtapeValidation>(this.apiUrl, etapeValidation);
  }

  update(etapeValidation: EtapeValidation): Observable<EtapeValidation> {
    return this.http.put<EtapeValidation>(
      this.apiUrl + '/' + etapeValidation.id,
      etapeValidation
    );
  }

  delete(id: number): Observable<EtapeValidation> {
    return this.http.delete<EtapeValidation>(this.apiUrl + '/' + id);
  }
}
