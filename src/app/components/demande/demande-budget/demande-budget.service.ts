import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { DemandeBudget } from '../../../models/demande-budget.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeBudgetService {

  apiUrl = AppConfig.apiUrl + '/demande-budgets';
  constructor(private http: HttpClient) { }

  findAll():Observable<DemandeBudget[]> {
    return this.http.get<DemandeBudget[]>(this.apiUrl);
  } 

  findById(id: number): Observable<DemandeBudget> {
    return this.http.get<DemandeBudget>(this.apiUrl + '/' + id);
  }

  add(demandeBudget: DemandeBudget): Observable<DemandeBudget> {
    return this.http.post<DemandeBudget>(this.apiUrl, demandeBudget);
  }

  update(demandeBudget: DemandeBudget): Observable<DemandeBudget> {
    return this.http.put<DemandeBudget>(
      this.apiUrl + '/' + demandeBudget.id,
      demandeBudget
    );
  }

  delete(id: number): Observable<DemandeBudget> {
    return this.http.delete<DemandeBudget>(this.apiUrl + '/' + id);
  }
}
