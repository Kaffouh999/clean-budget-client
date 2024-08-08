import { TestBed } from '@angular/core/testing';

import { ProcedureValidationService } from './procedure-validation.service';

describe('ProcedureValidationService', () => {
  let service: ProcedureValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedureValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
