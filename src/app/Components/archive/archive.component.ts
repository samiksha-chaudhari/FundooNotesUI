import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Services/notesService/notes-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notesArray: any;

  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.getArchive();
  }
  getArchive() {
    this.note.getArchive().subscribe((responce: any) => {
      console.log("note is archive", responce);
      this.notesArray = responce.data.data.reverse();
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === false;
       });

    }, error => {
      console.log(error);
    })
  }
  receivemessageToGetdisplay($event:any){
    console.log("event from icon to display",$event)
    
    this.getArchive();
  }

}
