import { TestBed } from '@angular/core/testing';

import { MockTripService } from './mock-trip.service';

describe('MockTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockTripService = TestBed.get(MockTripService);
    expect(service).toBeTruthy();
  });
});
