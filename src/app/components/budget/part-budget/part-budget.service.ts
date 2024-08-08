import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { PartBudget } from '../../../models/part-budget.model';

@Injectable({
  providedIn: 'root'
})
export class PartBudgetService {

  apiUrl = AppConfig.apiUrl + '/part-budgets';
  constructor(private http: HttpClient) { }

  findAll():Observable<PartBudget[]> {
    return this.http.get<PartBudget[]>(this.apiUrl);
  }
  
  findById(id: number): Observable<PartBudget> {
    return this.http.get<PartBudget>(this.apiUrl + '/' + id);
  }

  add(partBudget: PartBudget): Observable<PartBudget> {
    return this.http.post<PartBudget>(this.apiUrl, partBudget);
  }

  update(partBudget: PartBudget): Observable<PartBudget> {
    return this.http.put<PartBudget>(
      this.apiUrl + '/' + partBudget.id,
      partBudget
    );
  }

  delete(id: number): Observable<PartBudget> {
    return this.http.delete<PartBudget>(this.apiUrl + '/' + id);
  }
}
