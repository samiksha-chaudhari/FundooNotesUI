import { Component,EventEmitter,Input, OnInit, Output,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-disply-notes',
  templateUrl: './disply-notes.component.html',
  styleUrls: ['./disply-notes.component.scss']
})
export class DisplyNotesComponent implements OnInit {
  message: any;
  subscription: any;
  //constructor(){} 
  constructor(private dialog:MatDialog,private dataservice:DataServiceService) { }
  msg:any;
  searchword:any;

  @Input() Array: any;
  @Output() messageToGetAllNotes = new EventEmitter<any>();

  ngOnInit(): void {
    this.subscription = this.dataservice.searchNote.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
  }


  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      panelClass: 'dialog-container-custom',
      width: "600px",
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.messageToGetAllNotes.emit(result);
    });
  }
  receivemessageiconToDisplay($event:any){
    console.log("event from icon to display",$event)
    this.msg= $event;
    console.log("msg",this.msg);
    
    this.messageToGetAllNotes.emit(this.msg)
  }
}
