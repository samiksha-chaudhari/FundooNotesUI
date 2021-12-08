import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'forgetemail',component:ForgetEmailComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
