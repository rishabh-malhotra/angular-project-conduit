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
        'Content-Type':'application/json',
        'Authorization':'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzkzNzIsInVzZXJuYW1lIjoiVmluZWUiLCJleHAiOjE1NDQ3NzM2MzF9.5Wbmpz9oPIZoc6U9s0kVgd0tp0ngiWE1LU3_4hOKflw'
      })
    };
    
    var addedComment= this.http.post(`${this.url}articles/${slug}/comments`,JSON.stringify(comment),httpOptions);
    return addedComment;    
  }
  getAllComments(slug){
    var comments= this.http.get(`${this.url}articles/${slug}/comments`);
    return comments;
  }
}
