import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBorComponent } from './tableau-bor.component';

describe('TableauBorComponent', () => {
  let component: TableauBorComponent;
  let fixture: ComponentFixture<TableauBorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauBorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
