import { TestBed } from '@angular/core/testing';

import { FactorEnrollService } from './factor-enroll.service';

describe('FactorEnrollService', () => {
  let service: FactorEnrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorEnrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
