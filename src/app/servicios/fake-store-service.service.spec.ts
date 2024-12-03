import { TestBed } from '@angular/core/testing';

import { FakeStoreServiceService } from './fake-store-service.service';

describe('FakeStoreServiceService', () => {
  let service: FakeStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
