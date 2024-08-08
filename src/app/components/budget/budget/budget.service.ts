import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { Budget } from '../../../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  apiUrl = AppConfig.apiUrl + '/budgets';
  constructor(private http: HttpClient) { }

  findAll():Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiUrl);
  }

  findById(id: number): Observable<Budget> {
    return this.http.get<Budget>(this.apiUrl + '/' + id);
  }

  add(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.apiUrl, budget);
  }

  update(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(
      this.apiUrl + '/' + budget.id,
      budget
    );
  }

  delete(id: number): Observable<Budget> {
    return this.http.delete<Budget>(this.apiUrl + '/' + id);
  }

}
