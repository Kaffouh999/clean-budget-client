import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustementPartBudgetComponent } from './ajustement-part-budget.component';

describe('AjustementPartBudgetComponent', () => {
  let component: AjustementPartBudgetComponent;
  let fixture: ComponentFixture<AjustementPartBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjustementPartBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjustementPartBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
