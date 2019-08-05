import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from "../golf-course.service";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  note: string = '✓';
  golfCourse: any;
  Tee: number = 4;
  plrCount: number = 1;
  plrArry: any[];
  totalYards: number = 0;
  constructor(private _golfCourseService: GolfCourseService) { }
  genBackButton() {
    document.getElementById('cbody').innerHTML = `<a href="/${this._golfCourseService.courseID}">Back</a>`;
  }
  getTotalYards() {
    let Yards: number = 0;
    let YardVar: number;
    for (let i = 0; i < this.golfCourse.data.holes.length; i++) {
      YardVar = parseInt(this.golfCourse.data.holes[i].teeBoxes[this.Tee].yards);
      console.log(YardVar);
      Yards += YardVar;
    }
    this.totalYards = Yards;
    return JSON.stringify(this.totalYards);
  }
  getTotalHCP() {
    let HCP: number = 0;
    let HCP_Var: number;
    for (let i = 0; i < this.golfCourse.data.holes.length; i++) {
      HCP_Var = parseInt(this.golfCourse.data.holes[i].teeBoxes[this.Tee].hcp);
      HCP += HCP_Var;
    }
    return JSON.stringify(HCP);
  }
  getTotalPar() {
    let PAR: number = 0;
    let PAR_Var:  number;
    for (let i = 0; i < this.golfCourse.data.holes.length; i++) {
      PAR_Var = parseInt(this.golfCourse.data.holes[i].teeBoxes[this.Tee].par);
      PAR += PAR_Var;
    }
    return JSON.stringify(PAR);
  }
  ngOnInit() {
    if (document.location.href.includes('&')) {
      if (document.location.href.includes('Pro')) {
        this.Tee = 0;
      } else if (document.location.href.includes('Champion')) {
        this.Tee = 1;
      } else if (document.location.href.includes('Men')) {
        this.Tee = 2;
      } else if (document.location.href.includes('Women')) {
        this.Tee = 3;
      } else {
        this.Tee = 4;
      }
    }
    if (document.location.href.includes('$')) {

      if (document.location.href.includes('$1')) {
        this.plrCount = 1;
        this.plrArry = [1]
      } else if (document.location.href.includes('$2')) {
        this.plrCount = 2;
        this.plrArry = [1,2]
      } else if (document.location.href.includes('$3')) {
        this.plrCount = 3;
        this.plrArry = [1,2,3]
      } else if (document.location.href.includes('$4')) {
        this.plrCount = 4;
        this.plrArry = [1,2,3,4]
      }
    }
    this._golfCourseService.getGolfCourse().subscribe(data => this.golfCourse = data);
    this.getTotalYards();
  }
  calculateScore(playerNum) {
    this.note = '◦';
    let score: number = 0;
    let scoreVar: any;
    for (let i = 0; i < this.golfCourse.data.holes.length; i++) {
      // @ts-ignore
      if (parseInt(document.getElementById(`plr${playerNum}_H${i}`).value) < 0) {
        // @ts-ignore
        document.getElementById(`plr${playerNum}_H${i}`).value = 0;
        // @ts-ignore
      } else if (document.getElementById(`plr${playerNum}_H${i}`).value == '') {
        // @ts-ignore
        document.getElementById(`plr${playerNum}_H${i}`).value = 0;
      }
      // @ts-ignore
      scoreVar = parseInt(document.getElementById(`plr${playerNum}_H${i}`).value);
      score = score + scoreVar;
      console.log(scoreVar);
    }
    // @ts-ignore
    document.getElementById(`plr${playerNum}_score`).value = score;
    if (score > 72) {
      this.note = '✗';
    } else if (score == 72) {
      this.note = '◦';
    } else if (score < 72) {
      this.note = '✓';
    }
  }

}
