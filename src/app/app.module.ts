import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsPageComponent } from './component/projects-page/projects-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AboutMePageComponent } from './component/about-me-page/about-me-page.component';
import { ExperiencePageComponent } from './component/experience-page/experience-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsPageComponent,
    HomePageComponent,
    LandingPageComponent,
    AboutMePageComponent,
    ExperiencePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
