import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourFeedService {
  public url: string='https://conduit.productionready.io/api/';
  constructor(private http:HttpClient) { }
  yourFeedArticles(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
   var a= this.http.get(`${this.url}articles/feed`,httpOptions);
   return a;
  }
}
