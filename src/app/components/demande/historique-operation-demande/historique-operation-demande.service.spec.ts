import { TestBed } from '@angular/core/testing';

import { HistoriqueOperationDemandeService } from './historique-operation-demande.service';

describe('HistoriqueOperationDemandeService', () => {
  let service: HistoriqueOperationDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueOperationDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
