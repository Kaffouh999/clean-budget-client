import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueOperationDemandeComponent } from './historique-operation-demande.component';

describe('HistoriqueOperationDemandeComponent', () => {
  let component: HistoriqueOperationDemandeComponent;
  let fixture: ComponentFixture<HistoriqueOperationDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueOperationDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriqueOperationDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
