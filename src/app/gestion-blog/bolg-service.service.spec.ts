import { TestBed } from '@angular/core/testing';

import { BolgServiceService } from './bolg-service.service';

describe('BolgServiceService', () => {
  let service: BolgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
