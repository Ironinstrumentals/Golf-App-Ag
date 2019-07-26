import { TestBed } from '@angular/core/testing';

import { GolfCourseService } from './golf-course.service';

describe('GolfCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolfCourseService = TestBed.get(GolfCourseService);
    expect(service).toBeTruthy();
  });
});
