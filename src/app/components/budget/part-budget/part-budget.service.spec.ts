import { TestBed } from '@angular/core/testing';

import { PartBudgetService } from './part-budget.service';

describe('PartBudgetService', () => {
  let service: PartBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
