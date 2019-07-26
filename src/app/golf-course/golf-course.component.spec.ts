import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCourseComponent } from './golf-course.component';

describe('GolfCourseComponent', () => {
  let component: GolfCourseComponent;
  let fixture: ComponentFixture<GolfCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
