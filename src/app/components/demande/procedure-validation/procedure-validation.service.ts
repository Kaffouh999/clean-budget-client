import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { ProcedureValidation } from '../../../models/procedure-validation.model';

@Injectable({
  providedIn: 'root'
})
export class ProcedureValidationService {

  apiUrl = AppConfig.apiUrl + '/procedure-validations';
  constructor(private http: HttpClient) { }

  findAll():Observable<ProcedureValidation[]> {
    return this.http.get<ProcedureValidation[]>(this.apiUrl);
  }

  findById(id: number): Observable<ProcedureValidation> {
    return this.http.get<ProcedureValidation>(this.apiUrl + '/' + id);
  }

  add(procedureValidation: ProcedureValidation): Observable<ProcedureValidation> {
    return this.http.post<ProcedureValidation>(this.apiUrl, procedureValidation);
  }

  update(procedureValidation: ProcedureValidation): Observable<ProcedureValidation> {
    return this.http.put<ProcedureValidation>(
      this.apiUrl + '/' + procedureValidation.id,
      procedureValidation
    );
  }

  delete(id: number): Observable<ProcedureValidation> {
    return this.http.delete<ProcedureValidation>(this.apiUrl + '/' + id);
  }
}
