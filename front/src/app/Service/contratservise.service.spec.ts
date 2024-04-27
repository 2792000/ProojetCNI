import { TestBed } from '@angular/core/testing';

import { ContratserviseService } from './contratservise.service';

describe('ContratserviseService', () => {
  let service: ContratserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
