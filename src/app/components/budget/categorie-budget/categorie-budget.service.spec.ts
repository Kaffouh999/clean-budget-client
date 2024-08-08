import { TestBed } from '@angular/core/testing';

import { CategorieBudgetService } from './categorie-budget.service';

describe('CategorieBudgetService', () => {
  let service: CategorieBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
