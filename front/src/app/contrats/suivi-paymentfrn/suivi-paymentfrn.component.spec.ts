import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPaymentfrnComponent } from './suivi-paymentfrn.component';

describe('SuiviPaymentfrnComponent', () => {
  let component: SuiviPaymentfrnComponent;
  let fixture: ComponentFixture<SuiviPaymentfrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviPaymentfrnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPaymentfrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
