import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs';
import { Fournisseur } from '../../models/fournisseur.model';

@Injectable({
  providedIn: 'root',
})
export class MainContentService {
  apiUrl = AppConfig.apiUrl + '/fournisseurs';
  constructor(private http: HttpClient) {}

  getFournisseurs():Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }
}
