import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GolfApi } from "./golf-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GolfApiService {
  private _url: string = "https://golf-courses-api.herokuapp.com/courses";
  constructor(private http: HttpClient) {}
  getGolfApi(): Observable<GolfApi> {
    return this.http.get<GolfApi>(this._url);
  }
}
