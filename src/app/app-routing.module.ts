import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolfCourseComponent } from './golf-course/golf-course.component';
import { CourseListComponent } from "./course-list/course-list.component";

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
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
