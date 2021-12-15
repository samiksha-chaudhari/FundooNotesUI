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
  update(data :any){
    console.log("note service");

    let header = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      return this.http.Post('/notes/updateNotes',data,  true, header)

  }

  Color(data: any) {
    console.log("color service",data);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.Post('/notes/changesColorNotes', data, true, header);
  }

  delete(data:any){
    let header = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      return this.http.Post('/notes/trashNotes', data, true, header)
  }

  getDelete(){
    console.log("Data is in notes service");
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.Get('/notes/getTrashNotesList', true, header)
  }

  archive(data:any){
    let header = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      return this.http.Post('/notes/archiveNotes', data, true, header)
  }

  getArchive() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.http.Get('/notes/getArchiveNotesList', true, header)
  }
  
  deleteforever(data:any){
    let header = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      return this.http.Post('/notes/deleteForeverNotes', data, true, header)
  }


}
