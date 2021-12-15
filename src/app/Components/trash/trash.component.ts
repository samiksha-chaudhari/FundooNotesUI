import { Component, OnInit} from '@angular/core';
import { NotesServiceService } from 'src/app/Services/notesService/notes-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
notesArray : any = [];

constructor(private note:NotesServiceService) { }

  ngOnInit(): void {
    this.getTrash();
  }

  getTrash(){
    this.note.getDelete().subscribe((responce: any) => {
      console.log("response",responce);
      this.notesArray = responce.data.data.reverse();
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === true;
       });
      console.log('trashlist',this.notesArray);
    })
  }
  receivemessageToGetdisplay($event:any){
    console.log("event from icon to display",$event)
    
    this.getTrash();
  }
} 
