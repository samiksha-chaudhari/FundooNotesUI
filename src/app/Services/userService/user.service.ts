import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  
  constructor(private http:HttpService) {
    this.token= localStorage.getItem("token")
   }
    
  // registration(payload:any) {
  //   return this.http.Post(this.baseUrl+"register",payload)
  // }

  registration(payload: any){
   let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
   return this.http.Post('/user/userSignUp',payload,false,header)
  }

  login(payload: any)
  {    
   let header = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
     })
    }
   return this.http.Post("/user/login", payload, false, header)
  }

  mail(payload:any)
  {    
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
   return this.http.Post("/user/reset", payload, false, header)
  }

  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  
  reset(payload:any,token:any)
  {      
    let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization':token
        })
    }
   return this.http.Post("/user/reset-password", this.encode(payload), true, header)
  }


  // login(payload:any) {
  //   return this.http.Post(this.baseUrl+"Login",payload)
  // }

  // mail(payload:any) {
  //   return this.http.Post(this.baseUrl+"forgetpassword"+ "?email=" +payload.email,{ })
  // }

  // encode(data: any) {
  //   const formBody = [];
  //   for (const property in data) {
  //     const encodedKey = encodeURIComponent(property);
  //     const encodedValue = encodeURIComponent(data[property]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   return formBody.join('&');
  // }

  // reset(payload:any, token:any) {
  //   let Option = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //      //'Authorization':token
  //     })
  //  }
  //  return this.http.Post(this.baseUrl+"resetpassword", payload, false, Option)
  // }

  // reset(payload:any) {
  //   return this.http.Post(this.baseUrl+"resetpassword",payload,true)
  // }
  

}
