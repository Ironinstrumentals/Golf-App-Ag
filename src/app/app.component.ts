import { Component } from '@angular/core';
import {GolfApiService} from "./golf-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Box: Object = {};
  constructor(private _golfApiService: GolfApiService) { }

  ngOnInit() {
    this._golfApiService.getGolfApi()
      .subscribe(data => this.Box = data);
    console.log(this.Box);
  }
}
