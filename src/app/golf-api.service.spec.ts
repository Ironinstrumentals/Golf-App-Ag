import { TestBed } from '@angular/core/testing';

import { GolfApiService } from './golf-api.service';

describe('GolfApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolfApiService = TestBed.get(GolfApiService);
    expect(service).toBeTruthy();
  });
});
