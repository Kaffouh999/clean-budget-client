import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustementBudgetComponent } from './ajustement-budget.component';

describe('AjustementBudgetComponent', () => {
  let component: AjustementBudgetComponent;
  let fixture: ComponentFixture<AjustementBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjustementBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjustementBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
