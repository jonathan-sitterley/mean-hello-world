import { TestBed } from '@angular/core/testing';

import { RestUtilityService } from './rest-utility.service';

describe('RestUtilityService', () => {
  let service: RestUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
