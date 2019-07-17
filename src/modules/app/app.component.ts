import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const xhttp = new XMLHttpRequest();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient){}

  title = 'Golf-App-Ag';
  url = 'https://golf-courses-api.herokuapp.com/courses';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  api = this.getApi();
  getApi() {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        return JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
  }
}
