import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFournisseurComponent } from './delete-fournisseur.component';

describe('DeleteFournisseurComponent', () => {
  let component: DeleteFournisseurComponent;
  let fixture: ComponentFixture<DeleteFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
