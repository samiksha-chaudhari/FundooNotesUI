import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value = '';
  searchword: any;

  constructor(private router:Router,private snakebar:MatSnackBar,private data:DataServiceService) { }

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

   searchtitle(event: any) {
    console.log(event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'searchPipe',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

}
