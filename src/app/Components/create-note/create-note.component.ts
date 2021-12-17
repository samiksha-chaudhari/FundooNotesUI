import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  title='';
  description='';
  userID='';
  noteColor = "";  

  constructor(private formBuilder: FormBuilder, private notes:NotesServiceService, private snackBar:MatSnackBar) { }
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {

    this.NoteForm = this.formBuilder.group({
      title: [''],
      description:[''],
      service:['advance']
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.NoteForm.controls; }

  onClose() {
    this.submitted = true;
    this.hide=true;

    // stop here if form is valid
    if (this.NoteForm.valid) {
      let payload={
        title:this.NoteForm.value.title,
        description:this.NoteForm.value.description
      }
      console.log(payload);
      
      this.notes.create(payload).subscribe((next:any) => {
          console.log(next);
         this.messageEvent.emit(next)
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
