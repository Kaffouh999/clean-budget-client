import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { AjustementPartBudget } from '../../../models/ajustement-part-budget.model';

@Injectable({
  providedIn: 'root'
})
export class AjustementPartBudgetService {

  apiUrl = AppConfig.apiUrl + '/ajustement-part-budgets';
  constructor(private http: HttpClient) { }

  findAll():Observable<AjustementPartBudget[]> {
    return this.http.get<AjustementPartBudget[]>(this.apiUrl);
  }

  findById(id: number): Observable<AjustementPartBudget> {
    return this.http.get<AjustementPartBudget>(this.apiUrl + '/' + id);
  }

  add(ajustementPartBudget: AjustementPartBudget): Observable<AjustementPartBudget> {
    return this.http.post<AjustementPartBudget>(this.apiUrl, ajustementPartBudget);
  }

  update(ajustementPartBudget: AjustementPartBudget): Observable<AjustementPartBudget> {
    return this.http.put<AjustementPartBudget>(
      this.apiUrl + '/' + ajustementPartBudget.id,
      ajustementPartBudget
    );
  }

  delete(id: number): Observable<AjustementPartBudget> {
    return this.http.delete<AjustementPartBudget>(this.apiUrl + '/' + id);
  }
}
