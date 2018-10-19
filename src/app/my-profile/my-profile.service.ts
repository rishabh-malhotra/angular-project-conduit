import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  url: string='https://conduit.productionready.io/api/';
  constructor(private http: HttpClient) { }
  getProfile(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.url}profiles/${username}`);
  }
  getMyArticles(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.url}articles?author=${username}`);
  }
  getFavoriteArticles(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.url}articles?favorited=${username}`);
  }
  makeFeedsRequestonPages(offset){
    return this.http.get(`${this.url}articles?limit=10&offset=${offset}`)
   }
}