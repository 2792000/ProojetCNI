import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTranchfrComponent } from './ajout-tranchfr.component';

describe('AjoutTranchfrComponent', () => {
  let component: AjoutTranchfrComponent;
  let fixture: ComponentFixture<AjoutTranchfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTranchfrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTranchfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
