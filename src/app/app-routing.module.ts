import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolfCourseComponent } from './golf-course/golf-course.component';
import { CourseListComponent } from "./course-list/course-list.component";
import { ScorecardComponent } from "./scorecard/scorecard.component";

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  },
  {
    path: 'scorecard',
    component: ScorecardComponent
  },
  {
    path: '18300/scorecard',
    component: ScorecardComponent
  },
  {
    path: '11819/scorecard',
    component: ScorecardComponent
  },
  {
    path: '19002/scorecard',
    component: ScorecardComponent
  },
  {
    path: '18300',
    component: GolfCourseComponent
  },
  {
    path: '11819',
    component: GolfCourseComponent
  },
  {
    path: '19002',
    component: GolfCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
