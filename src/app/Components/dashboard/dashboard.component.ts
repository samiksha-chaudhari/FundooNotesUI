import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  notes() {
    this.router.navigateByUrl('/home/notes');
  };

  archive() {
    this.router.navigateByUrl('/home/archive');
  };
  
  trash() {
    this.router.navigateByUrl('/home/trash');
  };

}
