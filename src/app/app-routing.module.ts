import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { LoginpageComponent } from './loginpage/loginPage.component';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'team', component:TeamComponent},
  {path:'about',component:AboutComponent},
  // {path:'**',component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
