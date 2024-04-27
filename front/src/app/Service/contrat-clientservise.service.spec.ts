import { TestBed } from '@angular/core/testing';

import { ContratClientserviseService } from './contrat-clientservise.service';

describe('ContratClientserviseService', () => {
  let service: ContratClientserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratClientserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
