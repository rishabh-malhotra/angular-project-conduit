import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { AppComponent } from '../app.component';
  import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
url: string='https://conduit.productionready.io/api/';
user:Object;
constructor(private http: HttpClient) { }
 
  
  authUser(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    
    var a= this.http.post(`${this.url}users/login`,JSON.stringify({user}),httpOptions);
   return a;
  }
}
