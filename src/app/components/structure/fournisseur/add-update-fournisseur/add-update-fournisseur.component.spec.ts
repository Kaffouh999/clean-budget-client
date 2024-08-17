import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateFournisseurComponent } from './add-update-fournisseur.component';

describe('AddUpdateFournisseurComponent', () => {
  let component: AddUpdateFournisseurComponent;
  let fixture: ComponentFixture<AddUpdateFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUpdateFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
