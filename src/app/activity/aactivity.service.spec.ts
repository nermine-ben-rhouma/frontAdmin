import { TestBed } from '@angular/core/testing';

import { AactivityService } from './aactivity.service';

describe('AactivityService', () => {
  let service: AactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
