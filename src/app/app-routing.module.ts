import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { ProjectsPageComponent } from './component/projects-page/projects-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
