import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
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
      this.noteList = this.noteList.filter((notedata: any) => {
        return notedata.isDeleted === false && notedata.isArchived === false;

      })
    }, 
    error => {
      console.log(error);
    }
    )
  }
  receivemessageToGetdisplay($event:any){    
    this.getAllNotes();
  }
   
  receiveMessage($event:any){
    this.getAllNotes();
  }

}
