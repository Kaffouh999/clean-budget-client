import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../app.config';
import { Observable } from 'rxjs';
import { HistoriqueOperationDemande } from '../../../models/historique-operation-demande.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueOperationDemandeService {

  apiUrl = AppConfig.apiUrl + '/historique-operation-demandes';
  constructor(private http: HttpClient) { }

  findAll():Observable<HistoriqueOperationDemande[]> {
    return this.http.get<HistoriqueOperationDemande[]>(this.apiUrl);
  }
  
  findById(id: number): Observable<HistoriqueOperationDemande> {
    return this.http.get<HistoriqueOperationDemande>(this.apiUrl + '/' + id);
  }

  add(historiqueOperationDemande: HistoriqueOperationDemande): Observable<HistoriqueOperationDemande> {
    return this.http.post<HistoriqueOperationDemande>(this.apiUrl, historiqueOperationDemande);
  }

  update(historiqueOperationDemande: HistoriqueOperationDemande): Observable<HistoriqueOperationDemande> {
    return this.http.put<HistoriqueOperationDemande>(
      this.apiUrl + '/' + historiqueOperationDemande.id,
      historiqueOperationDemande
    );
  }

  delete(id: number): Observable<HistoriqueOperationDemande> {
    return this.http.delete<HistoriqueOperationDemande>(this.apiUrl + '/' + id);
  }
}
