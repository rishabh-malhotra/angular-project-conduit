import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {
  url: string = 'https://conduit.productionready.io/api/';
  user: Object;
  constructor(private http: HttpClient, ) { }
  getArticleDetails(slug) {
    var a = this.http.get(`${this.url}articles/${slug}`);
    return a;
  }

  postComment(comment, slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };

    var addedComment = this.http.post(`${this.url}articles/${slug}/comments`, JSON.stringify(comment), httpOptions);
    return addedComment;
  }
  getAllComments(slug) {
    var comments = this.http.get(`${this.url}articles/${slug}/comments`);
    return comments;
  }
  removeComment(id, slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };
    var deleted = this.http.delete(`${this.url}articles/${slug}/comments/${id}`, httpOptions);
    return deleted;
  }
  removeArticle(slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };
    var deletedArticle = this.http.delete(`${this.url}articles/${slug}`, httpOptions);
    return deletedArticle;
  }
  follow(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };

    var a = this.http.post(`${this.url}profiles/${user.article.author.username}/follow`, JSON.stringify(user), httpOptions);
    return a;
  }
  favorite(slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };

    var a = this.http.post(`${this.url}articles/${slug}/favorite`, JSON.stringify(slug), httpOptions);
    return a;
  }
  Unfollow(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };

    var a = this.http.delete(`${this.url}profiles/${user.article.author.username}/follow`, httpOptions);
    return a;
  }
  Unfavorite(slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('Token')
      })
    };
    var a = this.http.delete(`${this.url}articles/${slug}/favorite`, httpOptions);
    return a;
  }
}
