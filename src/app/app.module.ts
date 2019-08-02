import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { GolfCourseComponent } from './golf-course/golf-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NoNameDupesPipe } from './no-name-dupes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScorecardComponent,
    GolfCourseComponent,
    CourseListComponent,
    NoNameDupesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent, AppComponent]
})
export class AppModule { }
