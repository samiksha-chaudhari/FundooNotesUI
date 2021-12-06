import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  Post(url: string, payload:any, token: boolean=false, header: any=null){
    
    return this.http.post(url,payload,token && header)
  }
}
