import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTrancheComponent } from './ajout-tranche.component';

describe('AjoutTrancheComponent', () => {
  let component: AjoutTrancheComponent;
  let fixture: ComponentFixture<AjoutTrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
