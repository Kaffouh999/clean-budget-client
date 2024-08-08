import { TestBed } from '@angular/core/testing';

import { JustificationDepenseService } from './justification-depense.service';

describe('JustificationDepenseService', () => {
  let service: JustificationDepenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JustificationDepenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
