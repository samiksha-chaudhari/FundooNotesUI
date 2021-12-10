import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  resetForm !: FormGroup;
  submitted = false;  

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  onSubmit() {
    const token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(token);
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.valid) {
      let payload={
        newPassword:this.resetForm.value.password 
      }
      console.log(payload);
      this.user.reset(payload,token).subscribe(
        (next: any) => {
          console.log(next),
          this.snackBar.open("password reset successful"," ",{
            duration:1000
          });
        },
        (error: any)=>console.log(error)

      )
    }
    else{
      this.snackBar.open("reset failed"," ",{
        duration:1000
      });
    }
  }
}


