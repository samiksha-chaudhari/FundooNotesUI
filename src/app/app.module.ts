import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './Components/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ForgetEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
