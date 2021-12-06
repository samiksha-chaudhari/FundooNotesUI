import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpService) { }

  registration(payload:any) {
    return this.http.Post(this.baseUrl+"register",payload)
  }
  login(payload:any) {
    return this.http.Post(this.baseUrl+"Login",payload)
  }
}
