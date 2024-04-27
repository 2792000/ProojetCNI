import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivecfComponent } from './archivecf.component';

describe('ArchivecfComponent', () => {
  let component: ArchivecfComponent;
  let fixture: ComponentFixture<ArchivecfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivecfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivecfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
