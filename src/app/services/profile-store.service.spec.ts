import { TestBed } from '@angular/core/testing';

import { ProfileStoreService } from './profile-store.service';

describe('ProfileStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileStoreService = TestBed.get(ProfileStoreService);
    expect(service).toBeTruthy();
  });
});
