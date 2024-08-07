import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartBudgetComponent } from './part-budget.component';

describe('PartBudgetComponent', () => {
  let component: PartBudgetComponent;
  let fixture: ComponentFixture<PartBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
