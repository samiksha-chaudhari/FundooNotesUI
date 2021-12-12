import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-disply-notes',
  templateUrl: './disply-notes.component.html',
  styleUrls: ['./disply-notes.component.scss']
})
export class DisplyNotesComponent implements OnInit {
  @Input() notesArray: any;

  constructor() { }
  @Output() noteUpdated = new EventEmitter<any>();

  ngOnInit(): void {
  }
   

}
