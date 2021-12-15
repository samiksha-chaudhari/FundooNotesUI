import { Component,EventEmitter,Input, OnInit, Output,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-disply-notes',
  templateUrl: './disply-notes.component.html',
  styleUrls: ['./disply-notes.component.scss']
})
export class DisplyNotesComponent implements OnInit {
  //constructor(){} 
  constructor(private dialog:MatDialog) { }
  msg:any;
  
  @Input() Array: any;
  @Output() messageToGetdisplay = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      panelClass: 'dialog-container-custom',
      width: "600px",
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.messageToGetdisplay.emit(result);
    });
  }
  receivemessageiconToDisplay($event:any){
    console.log("event from icon to display",$event)
    this.msg= $event;
    console.log("msg",this.msg);
    
    this.messageToGetdisplay.emit(this.msg)
  }
}
