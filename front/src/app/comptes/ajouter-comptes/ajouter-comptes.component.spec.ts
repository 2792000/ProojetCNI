import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterComptesComponent } from './ajouter-comptes.component';

describe('AjouterComptesComponent', () => {
  let component: AjouterComptesComponent;
  let fixture: ComponentFixture<AjouterComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
