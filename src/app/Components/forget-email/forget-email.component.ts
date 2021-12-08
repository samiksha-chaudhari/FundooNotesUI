import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.scss']
})
export class ForgetEmailComponent implements OnInit {
  forgetForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgetForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is valid
    if (this.forgetForm.valid) {
      let payload={
        email:this.forgetForm.value.email      
      }
      console.log(payload);
      this.user.mail(payload).subscribe(
        (next) => {
          console.log(next),
          this.snackBar.open("Mail is send"," ",{
            duration:1000
          });
        },
        (error)=>console.log(error)

      )
    }
    else{
      this.snackBar.open("mail not send"," ",{
        duration:1000
      });
    }
   
  }


}
