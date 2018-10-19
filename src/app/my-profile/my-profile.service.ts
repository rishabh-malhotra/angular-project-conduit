import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  url: string='https://conduit.productionready.io/api/';
  constructor(private http: HttpClient) { }
  getProfile(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
   return this.http.get(`${this.url}user`,httpOptions);
  }
  getMyArticles(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.url}articles?author=${localStorage.getItem('username')}`,httpOptions);
  }
  getFavoriteArticles(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.url}articles?favorited=${localStorage.getItem('username')}`,httpOptions);
  }
}