import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Services/notesService/notes-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  hide=true;
  NoteForm !:FormGroup;
  submitted = false;
  Title='';
  Description='';
  userID='';


  constructor(private formBuilder: FormBuilder, private notes:NotesServiceService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.NoteForm = this.formBuilder.group({
      Title: [''],
      Description:[''],
      userID:[''],
      service:['advance']
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.NoteForm.controls; }

  onClose() {
    this.submitted = true;

    // stop here if form is valid
    if (this.Title != null && this.Description != null) {
      let payload={
        title:this.NoteForm.value.Title,
        description:this.NoteForm.value.Description,
        id:this.NoteForm.value.userID    
      }
      console.log(payload);
      this.notes.create(payload).subscribe(
        (next) => {
          console.log(next),
          this.snackBar.open("note created"," ",{
            duration:1000
          });
        },
        (error)=>console.log(error)

      )
    }
    
    else{
      this.snackBar.open("not created"," ",{
        duration:1000
      });
    }
   
  }




 }
