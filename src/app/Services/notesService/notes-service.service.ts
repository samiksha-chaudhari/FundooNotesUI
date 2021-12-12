import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  token: any;

  constructor(private http: HttpService) {
    this.token = localStorage.getItem("token")
  }

  create(payload: any) {
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': this.token
      })
    }
    console.log(header);
    return this.http.Post("/notes/addNotes", payload, true, header)

  }
  GetallNotes() {
    this.token = localStorage.getItem('token');
    console.log("Data is in notes service");

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.Get('/notes/getNotesList',true ,header);
  }

  // display(payload: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //       'Authorization': this.token
  //     })
  //   }
  //   console.log(header);
  //   return this.http.Post("/notes/addNotes", payload, true, header)

  // }
}
