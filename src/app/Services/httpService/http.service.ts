import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  Post(url: string, payload:any, token: boolean=false, header: any=null){
    
    return this.http.post(this.baseUrl+url,payload,token && header)
  }

  Get(url = '', token: boolean = false, header: any = null) {
    return this.http.get(this.baseUrl + url,token && header)
  }

}
