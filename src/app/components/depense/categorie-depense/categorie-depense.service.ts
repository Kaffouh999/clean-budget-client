import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { CategorieDepense } from '../../../models/categorie-depense.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieDepenseService {

  apiUrl = AppConfig.apiUrl + '/categorie-depenses';
  constructor(private http: HttpClient) { }

  findAll():Observable<CategorieDepense[]> {
    return this.http.get<CategorieDepense[]>(this.apiUrl);
  }
  
  findById(id: number): Observable<CategorieDepense> {
    return this.http.get<CategorieDepense>(this.apiUrl + '/' + id);
  }

  add(categorieDepense: CategorieDepense): Observable<CategorieDepense> {
    return this.http.post<CategorieDepense>(this.apiUrl, categorieDepense);
  }

  update(categorieDepense: CategorieDepense): Observable<CategorieDepense> {
    return this.http.put<CategorieDepense>(
      this.apiUrl + '/' + categorieDepense.id,
      categorieDepense
    );
  }

  delete(id: number): Observable<CategorieDepense> {
    return this.http.delete<CategorieDepense>(this.apiUrl + '/' + id);
  }
}
