import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesServiceService } from 'src/app/Services/notesService/notes-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;  
  id: any;
  message:any;
  color: any;

  constructor(public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private note: NotesServiceService) { 
    this.title = data.title,
    this.description = data.description
    this.id = data.id
  }
  
  ngOnInit(): void {
  }

  onClose() {
    this.id;
    let data = {
      title: this.title,
      description: this.description,
      noteId: this.id,
    }
    this.note.update(data).subscribe((result: any) => {
      console.log("updated notes", result);
      this.title = ''
      this.description = ''
      this.dialogRef.close(result);
    })
  }
}
