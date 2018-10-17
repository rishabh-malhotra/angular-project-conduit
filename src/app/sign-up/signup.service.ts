import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url: string='https://conduit.productionready.io/api/';
  constructor(private http:HttpClient) { }

  regUser(user){
     console.log(JSON.stringify({user}));
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':'application/json'
       })
     };
     
      return this.http.post(`${this.url}users`,JSON.stringify({user}),httpOptions); 
   }


}
