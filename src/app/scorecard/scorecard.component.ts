import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from "../golf-course.service";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  golfCourse: Object = {};
  constructor(private _golfCourseService: GolfCourseService) { }
  ngOnInit() {
    this._golfCourseService.getGolfCourse()
      .subscribe(data => this.golfCourse = data);
    console.log(this.golfCourse);
  }

}
