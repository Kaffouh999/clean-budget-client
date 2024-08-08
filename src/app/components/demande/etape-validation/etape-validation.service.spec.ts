import { TestBed } from '@angular/core/testing';

import { EtapeValidationService } from './etape-validation.service';

describe('EtapeValidationService', () => {
  let service: EtapeValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapeValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
