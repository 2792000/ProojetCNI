import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifComptesComponent } from './modif-comptes.component';

describe('ModifComptesComponent', () => {
  let component: ModifComptesComponent;
  let fixture: ComponentFixture<ModifComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
