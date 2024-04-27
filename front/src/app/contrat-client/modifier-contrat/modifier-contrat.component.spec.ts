import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierContratComponent } from './modifier-contrat.component';

describe('ModifierContratComponent', () => {
  let component: ModifierContratComponent;
  let fixture: ComponentFixture<ModifierContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
