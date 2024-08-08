import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { Fournisseur } from '../../../models/fournisseur.model';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  apiUrl = AppConfig.apiUrl + '/fournisseurs';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }

  findById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(this.apiUrl + '/' + id);
  }

  add(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, fournisseur);
  }

  update(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(
      this.apiUrl + '/' + fournisseur.id,
      fournisseur
    );
  }

  delete(id: number): Observable<Fournisseur> {
    return this.http.delete<Fournisseur>(this.apiUrl + '/' + id);
  }
}
