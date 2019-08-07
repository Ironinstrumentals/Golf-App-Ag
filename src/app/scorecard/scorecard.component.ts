import {Component, OnInit} from '@angular/core';
import {GolfCourseService} from "../golf-course.service";
import * as firebase from "firebase";
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: 'angular-golf-app-55a6a'
});

const db = firebase.firestore();
@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  docRef: any = db.collection("sessionData").doc("data");
  document = document;
  golfCourse: any;
  Tee: number = 4;
  TeeType: string = '';
  plrCount: number = 1;
  plrArry: any[];
  totalYards: number = 0;
  players: any[] = [
    {
      name: 'Player 1',
      score: [],
    }
  ];
  constructor(private _golfCourseService: GolfCourseService) { }
  genBackButton() {
    document.getElementById('cbody').innerHTML = `<a href="/${this._golfCourseService.courseID}">Back</a>`;
  }
  getTotalYards() {
    let Yards: number = 0;
    let YardVar: number;
    for (let i = 0; i < this.golfCourse.data.holes.length; i++) {
      YardVar = parseInt(this.golfCourse.data.holes[i].teeBoxes[this.Tee].yards);
      // console.log(YardVar);
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
        this.TeeType = 'Pro';
      } else if (document.location.href.includes('Champion')) {
        this.Tee = 1;
        this.TeeType = 'Champion';
      } else if (document.location.href.includes('Men')) {
        this.Tee = 2;
        this.TeeType = 'Men';
      } else if (document.location.href.includes('Women')) {
        this.Tee = 3;
        this.TeeType = 'Women';
      } else {
        this.Tee = 4;
      }
    }
    if (document.location.href.includes('$')) {

      if (document.location.href.includes('$1')) {
        this.plrCount = 1;
        this.plrArry = [1];
        this.players = [
          {
            name: 'Player 1',
            score: []
          }
        ]
      } else if (document.location.href.includes('$2')) {
        this.plrCount = 2;
        this.plrArry = [1, 2];
        this.players = [
          {
            name: 'Player 1',
            score: []
          },
          {
            name: 'Player 2',
            score: []
          }
        ]
      } else if (document.location.href.includes('$3')) {
        this.plrCount = 3;
        this.plrArry = [1, 2, 3];
        this.players = [
          {
            name: 'Player 1',
            score: []
          },
          {
            name: 'Player 2',
            score: []
          },
          {
            name: 'Player 3',
            score: []
          }
        ]
      } else if (document.location.href.includes('$4')) {
        this.plrCount = 4;
        this.plrArry = [1, 2, 3, 4];
        this.players = [
          {
            name: 'Player 1',
            score: []
          },
          {
            name: 'Player 2',
            score: []
          },
          {
            name: 'Player 3',
            score: []
          },
          {
            name: 'Player 4',
            score: []
          }
        ]
      }
    }
    this._golfCourseService.getGolfCourse().subscribe(data => this.golfCourse = data);
    this.getTotalYards();
  };
  calculateScore(playerNum) {
    let score: number = 0;
    let scoreVar: any;
    this.players[(playerNum - 1)].score = [];
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
      this.players[(playerNum - 1)].score.push(scoreVar);
      this.players[(playerNum - 1)].score[i] = scoreVar;

      score = score + scoreVar;
      // console.log(scoreVar);
    }
    // @ts-ignore
    document.getElementById(`plr${playerNum}_score`).value = score;
    let note: string = '✓';
    if (score > 72) {
      note = '✗';
      // @ts-ignore
      document.getElementById(`plr${playerNum}_note`).value = note;
    } else if (score == 72) {
      note = '◦';
      // @ts-ignore
      document.getElementById(`plr${playerNum}_note`).value = note;
    } else if (score < 72) {
      note = '✓';
      // @ts-ignore
      document.getElementById(`plr${playerNum}_note`).value = note;
    }
    // console.log(this.players);
  }
  noNameDupes() {
    for (let i = 0; i < 4; i++) {
      if (document.getElementById('plr2_name')) {
        // @ts-ignore
        if (document.getElementById('plr1_name').value != '' && document.getElementById('plr1_name') != null) {
          // @ts-ignore
          if (document.getElementById('plr1_name').value == document.getElementById('plr2_name').value) {
            // alert('Name Duplication Detected, Resolving...');
            // @ts-ignore
            document.getElementById('plr2_name').value += '+';
          }
        }

        // @ts-ignore
        if (document.getElementById('plr2_name').value != '' && document.getElementById('plr1_name') != null) {

          if(document.getElementById('plr3_name')){
            // @ts-ignore
            if (document.getElementById('plr2_name').value == document.getElementById('plr3_name').value) {
              // alert('Name Duplication Detected, Resolving...');
              // @ts-ignore
              document.getElementById('plr3_name').value += '+';
            }
          }
        }
        if (document.getElementById('plr3_name')) {
        // @ts-ignore
        if (document.getElementById('plr3_name').value != '' && document.getElementById('plr3_name') != null)
            // @ts-ignore
            if (document.getElementById('plr1_name').value == document.getElementById('plr3_name').value) {
              // alert('Name Duplication Detected, Auto Resolving...');
              // @ts-ignore
              document.getElementById('plr3_name').value += '+';
            }
            if (document.getElementById('plr4_name')) {
              // @ts-ignore
              if (document.getElementById('plr4_name').value != '' && document.getElementById('plr4_name') != null)
              // @ts-ignore
                if (document.getElementById('plr1_name').value == document.getElementById('plr4_name').value) {
                  // alert('Name Duplication Detected, Auto Resolving...');
                  // @ts-ignore
                  document.getElementById('plr4_name').value += '+';
                }
              // @ts-ignore
              if (document.getElementById('plr2_name').value == document.getElementById('plr4_name').value) {
                // alert('Name Duplication Detected, Auto Resolving...');
                // @ts-ignore
                document.getElementById('plr4_name').value += '+';
              }
              // @ts-ignore
              if (document.getElementById('plr3_name').value == document.getElementById('plr4_name').value) {
                // alert('Name Duplication Detected, Auto Resolving...');
                // @ts-ignore
                document.getElementById('plr4_name').value += '+';
              }
            }
          }
      }
    }
    if (document.getElementById('plr1_name')) {
      // @ts-ignore
      this.players[0].name = document.getElementById('plr1_name').value;
    }
    if (document.getElementById('plr2_name')) {
      // @ts-ignore
      this.players[1].name = document.getElementById('plr2_name').value;
    }
    if (document.getElementById('plr3_name')) {
      // @ts-ignore
      this.players[2].name = document.getElementById('plr3_name').value;
    }
    if (document.getElementById('plr4_name')) {
      // @ts-ignore
      this.players[3].name = document.getElementById('plr4_name').value;
    }
  }
  loadData() {
    let DBPlayers;
    // if (document.location.href.includes('*load'))
    this.docRef.get().then(function(doc) {
      if (doc.exists) {
        DBPlayers = doc.data();
        if (document.location.href.includes(DBPlayers.courseID)) {
          if (document.location.href.includes(`$${DBPlayers.playerNum}`)) {
            if (document.location.href.includes(`&${DBPlayers.Tee}`)) {
              for (let k = 0; k < DBPlayers.playerNum; k++) {
                // @ts-ignore
                document.getElementById(`plr${k+1}_name`).value = DBPlayers.players[k].name;
                for (let i = 0; i < DBPlayers.players[k].score.length; i++) {
                  // @ts-ignore
                  document.getElementById(`plr${k+1}_H${i}`).value = DBPlayers.players[k].score[i];
                }
              }
            } else {
              alert(`The Data you are trying to load is for:\nThe ${DBPlayers.Tee} Tee\n Redirecting You Now...`);
              document.location.href = `/scorecard#${DBPlayers.courseID}$${DBPlayers.playerNum}&${DBPlayers.Tee}*load`;
              document.location.reload();
            }
          } else {
           alert(`The Data you are trying to load is for:\n${DBPlayers.playerNum} player(s)\nat the ${DBPlayers.Tee} Tee\n Redirecting You Now...`);
            document.location.href = `/scorecard#${DBPlayers.courseID}$${DBPlayers.playerNum}&${DBPlayers.Tee}*load`;
            document.location.reload();
          }
        } else {
          alert(`The Data you are trying to load is for:\n${DBPlayers.courseName},\nwith ${DBPlayers.playerNum} Player(s),\nat the ${DBPlayers.Tee} Tee.\n Redirecting You Now...`);
          document.location.href = `/scorecard#${DBPlayers.courseID}$${DBPlayers.playerNum}&${DBPlayers.Tee}*load`;
          document.location.reload();
        }
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }
  saveData() {
    if (document.getElementById('plr1_name')) {
      // @ts-ignore
      this.players[0].name = document.getElementById('plr1_name').value
    }
    if (document.getElementById('plr2_name')) {
      // @ts-ignore
      this.players[1].name = document.getElementById('plr2_name').value
    }
    if (document.getElementById('plr3_name')) {
      // @ts-ignore
      this.players[2].name = document.getElementById('plr3_name').value
    }
    if (document.getElementById('plr4_name')) {
      // @ts-ignore
      this.players[3].name = document.getElementById('plr4_name').value
    }
    // console.log(this.players);
    // SAVE HERE
    db.collection("sessionData").doc("data").set({
      players: this.players,
      courseID: this.golfCourse.data.id,
      playerNum: this.players.length,
      courseName: this.golfCourse.data.name,
      Tee: this.TeeType
    })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }
}
