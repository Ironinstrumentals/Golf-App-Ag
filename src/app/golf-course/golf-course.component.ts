import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from "../golf-course.service";
import {GolfApiService} from "../golf-api.service";

@Component({
  selector: 'app-golf-course',
  templateUrl: './golf-course.component.html',
  styleUrls: ['./golf-course.component.css']
})
export class GolfCourseComponent implements OnInit {
  golfCourse: Object = {};
  constructor(private _golfCourseService: GolfCourseService) { }
  ngOnInit() {
    this._golfCourseService.getGolfCourse()
      .subscribe(data => this.golfCourse = data);
    console.log(this.golfCourse);
  }

}
