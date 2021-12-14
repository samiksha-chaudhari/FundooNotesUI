import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplyNotesComponent } from './Components/disply-notes/disply-notes.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AuthguardGuard } from './Authguard/authguard.guard';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'forgetemail',component:ForgetEmailComponent},
  {path:'home',component:DashboardComponent,canActivate:[AuthguardGuard],
   children:[
    {path:'',redirectTo:"notes",pathMatch:'full'},
    {path:'notes',component:GetAllNoteComponent},
   // {path:'display',component:DisplyNotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
   ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
