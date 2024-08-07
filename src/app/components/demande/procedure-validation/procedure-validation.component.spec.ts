import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureValidationComponent } from './procedure-validation/procedure-validation.component';

describe('ProcedureValidationComponent', () => {
  let component: ProcedureValidationComponent;
  let fixture: ComponentFixture<ProcedureValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcedureValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
