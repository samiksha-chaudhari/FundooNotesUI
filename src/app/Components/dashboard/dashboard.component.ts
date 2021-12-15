import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private snakebar:MatSnackBar) { }

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

  logout() {
    localStorage.removeItem('token');
    this.snakebar.open("Logged Out", '', {
      duration: 2000,
    })
    this.router.navigateByUrl('/login');
  }

}
