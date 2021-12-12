import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplyNotesComponent } from './Components/disply-notes/disply-notes.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';
import { IconComponent } from './Components/icon/icon.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AuthguardGuard } from './Authguard/authguard.guard';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'forgetemail',component:ForgetEmailComponent},
  {path:'home',component:DashboardComponent,canActivate:[AuthguardGuard],
   children:[
    {path:'',redirectTo:"notes",pathMatch:'full'},
    {path:'notes',component:GetAllNoteComponent},
    {path:'display',component:DisplyNotesComponent},
    {path:'icon',component:IconComponent}
   ]
  },
  {path:'create',component:CreateNoteComponent},
  {path:'display',component:DisplyNotesComponent},
  {path:'icon',component:IconComponent},
  {path:'create',component:CreateNoteComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
