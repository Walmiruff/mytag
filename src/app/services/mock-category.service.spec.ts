import { TestBed } from '@angular/core/testing';

import { MockCategoryService } from './mock-category.service';

describe('MockCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockCategoryService = TestBed.get(MockCategoryService);
    expect(service).toBeTruthy();
  });
});
