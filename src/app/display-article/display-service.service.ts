import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {
  url: string='https://conduit.productionready.io/api/';
  user:Object;
  constructor(private http: HttpClient) { }
  getArticleDetails(slug){
    var a= this.http.get(`${this.url}articles/${slug}`);
    return a;
  }
  postComment(comment,slug){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    
    var a= this.http.post(`${this.url}articles/${slug}/comments`,JSON.stringify(comment),httpOptions);
    return a;    

  }
}
