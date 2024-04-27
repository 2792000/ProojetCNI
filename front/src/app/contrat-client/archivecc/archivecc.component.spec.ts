import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveccComponent } from './archivecc.component';

describe('ArchiveccComponent', () => {
  let component: ArchiveccComponent;
  let fixture: ComponentFixture<ArchiveccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
