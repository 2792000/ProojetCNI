import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContratRenvComponent } from './list-contrat-renv.component';

describe('ListContratRenvComponent', () => {
  let component: ListContratRenvComponent;
  let fixture: ComponentFixture<ListContratRenvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContratRenvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContratRenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
