import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheContratComponent } from './affiche-contrat.component';

describe('AfficheContratComponent', () => {
  let component: AfficheContratComponent;
  let fixture: ComponentFixture<AfficheContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
