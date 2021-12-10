import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  baseUrl = environment.baseUrl;
  token: any;

  constructor(private http: HttpService) {
    this.token = localStorage.getItem("token")
  }

  create(payload: any) {
    this.token = localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': 'Bearer' + this.token
      })
    }
    console.log(header);
    return this.http.Post(this.baseUrl + "addnotes", payload, false, header)
  }
}
