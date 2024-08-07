import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationDepenseComponent } from './justification-depense.component';

describe('JustificationDepenseComponent', () => {
  let component: JustificationDepenseComponent;
  let fixture: ComponentFixture<JustificationDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationDepenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JustificationDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
