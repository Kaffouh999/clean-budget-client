import { TestBed } from '@angular/core/testing';

import { AjustementPartBudgetService } from './ajustement-part-budget.service';

describe('AjustementPartBudgetService', () => {
  let service: AjustementPartBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjustementPartBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
