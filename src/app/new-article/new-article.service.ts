import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewArticleService {
  url:string='https:///conduit.productionready.io/api/';


  constructor(private http:HttpClient) { }

  publishArticle(data){
    const httpOptions={
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token '+localStorage.getItem('Token')
    })
    };
    var article=this.http.post(`${this.url}articles`,JSON.stringify(data),httpOptions);
    return article;
  }
}
