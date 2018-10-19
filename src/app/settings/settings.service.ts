import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})
export class SettingsService {
  url: string='https://conduit.productionready.io/api/';
  username: string;
  constructor(private http: HttpClient) { }
  getProfile(){
    this.username=localStorage.getItem('username');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
   return this.http.get(`${this.url}user`,httpOptions);
  }
  updateProfile(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.put(`${this.url}user`,JSON.stringify(user),httpOptions);
  }
 
}