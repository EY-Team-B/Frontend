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
import { AngularFileUploaderModule } from "angular-file-uploader";

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AngularFileUploaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
