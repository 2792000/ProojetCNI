import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenouvelleContratComponent } from './renouvelle-contrat.component';

describe('RenouvelleContratComponent', () => {
  let component: RenouvelleContratComponent;
  let fixture: ComponentFixture<RenouvelleContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenouvelleContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenouvelleContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
