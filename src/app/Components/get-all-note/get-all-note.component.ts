import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Services/notesService/notes-service.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  token: any;
  noteList: any = [];

  constructor(private note:NotesServiceService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.note.GetallNotes().subscribe((responce: any) => {
      console.log(responce);
      console.log(responce.data.data);

      this.noteList = responce.data.data;
      this.noteList.reverse();
    }, 
    error => {
      console.log(error);
    }
    )
  }

}
