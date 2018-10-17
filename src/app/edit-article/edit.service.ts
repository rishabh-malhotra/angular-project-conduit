import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  url: string='https://conduit.productionready.io/api/';
  user:Object;
  constructor(private http: HttpClient) { }
  getArticleDetails(slug){
    var a= this.http.get(`${this.url}articles/${slug}`);
    return a;
  }
  modifyArticle(slug,data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzkzNzIsInVzZXJuYW1lIjoiVmluZWUiLCJleHAiOjE1NDQ3NzM2MzF9.5Wbmpz9oPIZoc6U9s0kVgd0tp0ngiWE1LU3_4hOKflw'
      })
    };
    var a= this.http.put(`${this.url}articles/${slug}`,JSON.stringify(data),httpOptions);
    return a;
  }
}
