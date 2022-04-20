import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagerComponent } from './manager/manager.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReportsComponent } from './reports/reports.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { TeammatesComponent } from './teammates/teammates.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    PageNotFoundComponent,
    ManagerComponent,
    ReportsComponent,
    TeammatesComponent,
    RecruiterComponent,
    SchedulerComponent,
    CandidateListComponent,
    CreateCandidateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PdfViewerModule, NgxExtendedPdfViewerModule, HttpClientModule ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
