import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';


import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ManagerComponent } from './manager/manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecruiterComponent } from './recruiter/recruiter.component';

import { ReportsComponent } from './reports/reports.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

import { TeammatesComponent } from './teammates/teammates.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'view', component: UserListComponent},
  { path: 'manager', component: ManagerComponent},
  { path: 'report', component: ReportsComponent},
  { path: 'team', component: TeammatesComponent},
  { path: 'recruit', component:RecruiterComponent},
  { path: 'scheduler', component: SchedulerComponent},
  { path: 'create', component: CreateCandidateComponent},
  { path: 'show', component: CandidateListComponent},
  { path: 'update-user', component: UpdateUserComponent},
  { path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
