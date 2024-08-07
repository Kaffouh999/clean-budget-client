import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieBudgetComponent } from './categorie-budget.component';

describe('CategorieBudgetComponent', () => {
  let component: CategorieBudgetComponent;
  let fixture: ComponentFixture<CategorieBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
