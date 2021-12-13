import { Component,Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-disply-notes',
  templateUrl: './disply-notes.component.html',
  styleUrls: ['./disply-notes.component.scss']
})
export class DisplyNotesComponent implements OnInit {
  @Input() Array: any;

  constructor() { }
  
  ngOnInit(): void {
  }
   

}
