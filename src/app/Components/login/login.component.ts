import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //user='1'
  loginForm !: FormGroup;
  submitted = false;
  hide: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private user:UserService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    //localStorage.setItem('token',this.user)

    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: ['advance', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  showpassword()
{ this.hide = !this.hide}

  onSubmit() {
    this.submitted = true;

    // stop here if form is valid
    if (this.loginForm.valid) {
      let payload={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
        service:"advance"       
      }
      console.log(payload);
      this.user.login(payload).subscribe(
        (next:any) => {
          localStorage.setItem('token',next.id),
          console.log(next),
          this.snackBar.open("login successful"," ",{
            duration:1000
          });
        },
        (error)=>console.log(error)

      )
    }
    
    else{
      this.snackBar.open("login failed"," ",{
        duration:1000
      });
    }
   
  }

}

