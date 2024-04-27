import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifContratFrnComponent } from './modif-contrat-frn.component';

describe('ModifContratFrnComponent', () => {
  let component: ModifContratFrnComponent;
  let fixture: ComponentFixture<ModifContratFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifContratFrnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifContratFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
