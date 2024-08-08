import { TestBed } from '@angular/core/testing';

import { AjustementBudgetService } from './ajustement-budget.service';

describe('AjustementBudgetService', () => {
  let service: AjustementBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjustementBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
