import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPaymentComponent } from './suivi-payment.component';

describe('SuiviPaymentComponent', () => {
  let component: SuiviPaymentComponent;
  let fixture: ComponentFixture<SuiviPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
