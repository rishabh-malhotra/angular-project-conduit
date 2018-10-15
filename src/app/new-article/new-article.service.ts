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
      'Authorization':'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzkzNzIsInVzZXJuYW1lIjoiVmluZWUiLCJleHAiOjE1NDQ3NzM2MzF9.5Wbmpz9oPIZoc6U9s0kVgd0tp0ngiWE1LU3_4hOKflw'})
    };
    var article=this.http.post(`${this.url}articles`,JSON.stringify(data),httpOptions);
    return article;
  }
}
