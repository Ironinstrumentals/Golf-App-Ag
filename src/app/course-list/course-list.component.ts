import { Component, OnInit } from '@angular/core';
import {GolfApiService} from '../golf-api.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  Box: Object = {};
  constructor(private _golfApiService: GolfApiService) { }
  ngOnInit() {
    this._golfApiService.getGolfApi()
      .subscribe(data => this.Box = data);
    console.log(this.Box);
  }

}
