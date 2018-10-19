import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchAllArticlesService {
  url: string='https://conduit.productionready.io/api/';
user:Object;

  constructor(private http: HttpClient) { }
  getArticles(){
    var a= this.http.get(`${this.url}articles`);
   return a;
  }
  
  makeFeedsRequestonPages(offset){
    return this.http.get(`${this.url}articles?limit=10&offset=${offset}`)
   }

}
