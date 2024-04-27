import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeContratComponent } from './imprime-contrat.component';

describe('ImprimeContratComponent', () => {
  let component: ImprimeContratComponent;
  let fixture: ComponentFixture<ImprimeContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimeContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
