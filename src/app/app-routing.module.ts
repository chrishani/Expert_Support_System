import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminprofileComponent} from './adminprofile/adminprofile.component';
import { AdminrequestsComponent } from './adminrequests/adminrequests.component';
import { AdminusersComponent} from './adminusers/adminusers.component';
import { AdminclassesComponent } from './adminclasses/adminclasses.component';
import { AddnewclassComponent } from './addnewclass/addnewclass.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminresetpasswordComponent } from './adminresetpassword/adminresetpassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { Ruser1Component } from './ruser1/ruser1.component';
import { Ruser4Component } from './ruser4/ruser4.component';
import { User3Component } from './user3/user3.component';
import { User5Component } from './user5/user5.component'

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Admin', component: AdminhomeComponent },
  { path: 'AdminDashBoard', component: AdmindashComponent},
  { path: 'AdminProfile', component: AdminprofileComponent},
  { path: 'AdminRequests', component: AdminrequestsComponent},
  { path: 'AdminUsers', component: AdminusersComponent},
  { path: 'AdminClasses', component: AdminclassesComponent},
  { path: 'AddClass', component: AddnewclassComponent},
  { path: 'ResetPassword', component: ResetpasswordComponent},
  { path: 'AdminResetPassword', component: AdminresetpasswordComponent},
  { path: 'EditProfile', component: EditprofileComponent},
  { path: 'N_Sameera', component: Ruser1Component},
  { path: 'WS_Fernando', component: Ruser4Component},
  { path: 'Neville_Maximus', component: User3Component},
  { path: 'C_Ishara', component: User5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
