import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { CategorieBudget } from '../../../models/categorie-budget.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieBudgetService {

  apiUrl = AppConfig.apiUrl + '/categorie-budgets';
  constructor(private http: HttpClient) { }

  findAll():Observable<CategorieBudget[]> {
    return this.http.get<CategorieBudget[]>(this.apiUrl);
  }

  findById(id: number): Observable<CategorieBudget> {
    return this.http.get<CategorieBudget>(this.apiUrl + '/' + id);
  }

  add(categorieBudget: CategorieBudget): Observable<CategorieBudget> {
    return this.http.post<CategorieBudget>(this.apiUrl, categorieBudget);
  }

  update(categorieBudget: CategorieBudget): Observable<CategorieBudget> {
    return this.http.put<CategorieBudget>(
      this.apiUrl + '/' + categorieBudget.id,
      categorieBudget
    );
  }

  delete(id: number): Observable<CategorieBudget> {
    return this.http.delete<CategorieBudget>(this.apiUrl + '/' + id);
  }
}
