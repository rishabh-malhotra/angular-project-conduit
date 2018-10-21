import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})
export class TagsService {
  BASE_URL="https://conduit.productionready.io/api"; 
  constructor(private http: HttpClient) { }
   getAllTags()
{
  return this.http.get(this.BASE_URL+'/tags');
} 
}