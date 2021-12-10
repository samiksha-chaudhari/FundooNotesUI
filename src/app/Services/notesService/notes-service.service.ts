import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  baseUrl=environment.baseUrl;
  token: string | null;
  httpService: any;

  constructor(private http:HttpService) { 
    this.token= localStorage.getItem("token")
  }

  create(payload:any) {
    return this.http.Post(this.baseUrl+"addnotes",payload)
  }
}
