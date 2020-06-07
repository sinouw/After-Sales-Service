import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseReclamationsComponent } from './entreprise-reclamations.component';

describe('EntrepriseReclamationsComponent', () => {
  let component: EntrepriseReclamationsComponent;
  let fixture: ComponentFixture<EntrepriseReclamationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseReclamationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
