import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GolfCourse} from "./golf-course";

@Injectable({
  providedIn: 'root'
})
export class GolfCourseService {
  constructor(private http: HttpClient) {}
  courseID: string;
  getGolfCourse(): Observable<GolfCourse> {
    if (document.location.href.includes('18300')) {
      this.courseID = '18300';
    } else if (document.location.href.includes('11819')) {
      this.courseID = '11819';
    } else if (document.location.href.includes('19002')) {
      this.courseID = '19002';
    }
    return this.http.get<GolfCourse>(`https://golf-courses-api.herokuapp.com/courses/${this.courseID}`);
  }
}
