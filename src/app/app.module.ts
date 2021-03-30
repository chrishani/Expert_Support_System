import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminrequestsComponent } from './adminrequests/adminrequests.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminclassesComponent } from './adminclasses/adminclasses.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddnewclassComponent } from './addnewclass/addnewclass.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminresetpasswordComponent } from './adminresetpassword/adminresetpassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { User3Component } from './user3/user3.component';
import { User5Component } from './user5/user5.component';
import { Ruser1Component } from './ruser1/ruser1.component';
import { Ruser4Component } from './ruser4/ruser4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AdminhomeComponent,
    AdmindashComponent,
    StudentportalComponent,
    AdminprofileComponent,
    AdminrequestsComponent,
    AdminusersComponent,
    AdminclassesComponent,
    AddnewclassComponent,
    ResetpasswordComponent,
    AdminresetpasswordComponent,
    EditprofileComponent,
    User3Component,
    User5Component,
    Ruser1Component,
    Ruser4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
