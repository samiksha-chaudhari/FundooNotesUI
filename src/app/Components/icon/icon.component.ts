import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NotesServiceService } from 'src/app/Services/notesService/notes-service.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  archive=false;
  hide=true;
  Reminder:any;
  note:any;
  isTrashComponent:boolean = false;
  isArchive:boolean = false;
   
  @Output() messageIconToDisplay = new EventEmitter<string>();
  @Input() noteCard:any;

  constructor(private Note:NotesServiceService,private snackBar:MatSnackBar,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    let com = this.route.snapshot.component;

    if (com == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }

    if (com == ArchiveComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }
  }
  colors: any[] = [
    {
      "color": "#fff",
      "toolTip":"default",
      "icon":true
    },
    {
      "color": "#F28B82",
      "toolTip":"Red",
      "icon":false
    },
    {
      "color": "#FBBC04",
      "toolTip":"Orange",
      "icon":false
    },
    {
      "color": "#FFF475",
      "toolTip":"Yellow",
      "icon":false
    },
    {
      "color": "#CCFF90",
      "toolTip":"Green",
      "icon":false
    },
    {
      "color": "#A7FFEB",
      "toolTip":"Teal",
      "icon":false
    },
    {
      "color": "#CBF0F8",
      "toolTip":"Blue",
      "icon":false
    },
    {
      "color": "#AECBFA",
      "toolTip":"Dark Blue",
      "icon":false
    },
    {
      "color": "#D7AEFB",
      "toolTip":"Purple",
      "icon":false
    },
    {
      "color": "#FDCFE8",
      "toolTip":"Pink",
      "icon":false
    },
    {
      "color": "#E6C9A8",
      "toolTip":"Brown",
      "icon":false
    },
    {
      "color": "#E8EAED",
      "toolTip":"Gray"
    }
  ];

  reminders: any[] = [
  {
    "Text": "Later Today",
    "Time":"8:00 PM"
  },
  {
    "Text": "Tommorow",
    "Time":"8:00 AM"
  },
  {
    "Text": "Next Week",
    "Time":"8:00 AM"
  }
];

  archiveNote(){
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.Note.archive(payload).subscribe((response:any)=>{
      this.messageIconToDisplay.emit(response)
      console.log((response.data));
      this.snackBar.open('Note archive ', '', {
        duration: 1000,
      })
    })
  }
  unArchive(){
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    this.Note.archive(req).subscribe((response:any)=>{
      console.log('move to archive');
      this.messageIconToDisplay.emit(response)
      console.log((response.data));
      this.snackBar.open('Note unarchive ', '', {
        duration: 2000,
      })
    })
  }


  DeleteNote(){
    console.log(this.noteCard);
    let deleteData = {
      noteIdList: [this.noteCard.id],
      isDeleted: true
    }
    console.log(deleteData);
    this.Note.delete(deleteData).subscribe((response: any) => {
      console.log(response);
      this.messageIconToDisplay.emit(response);
      this.snackBar.open('Note deleted', '', {
        duration: 1000,
      })
    },
    )
  }
  
  ChangeColor(color:any)
  {
    console.log( "for colour change ", this.noteCard,color);
    let payload = {
      noteIdList: [this.noteCard.id],
      color: color
    }    
    this.Note.Color(payload).subscribe((response: any) => {
      console.log(response.data);
      this.messageIconToDisplay.emit(response);

    })    
  }

  deleteForever() {
    
    console.log(this.noteCard);
    let deleteData = {
      noteIdList: [this.noteCard.id],
      isDeleted: false
    }
    console.log("deleted data", deleteData);
    this.Note.deleteforever(deleteData).subscribe((response: any) => {
      console.log(response);
      this.messageIconToDisplay.emit(response)
      this.snackBar.open('Note deleted forever', '', {
        duration: 1000,
      })
    }, error => {
      console.log(error);
      this.snackBar.open('Unsuccessful', '', {
        duration: 1000,
      })
    })
  }

  restore() {
    console.log(this.noteCard);

    let restoreData = {
      noteIdList: [this.noteCard.id],
      isDeleted: false
    }
    console.log("deleted data", restoreData);

    this.Note.delete(restoreData).subscribe((response: any) => {
      console.log(response);
      this.messageIconToDisplay.emit(response);
      this.snackBar.open('Note restore', '', {
        duration: 2000,
      })
    }, error => {
      console.log(error);
      this.snackBar.open('Unsuccessful', '', {
        duration: 2000,
      })
    }
    )
  }

}