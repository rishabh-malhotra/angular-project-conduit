import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import {NewArticleService} from './new-article.service'

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  public data:string;
  constructor(private getData: NewArticleService, private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
  }
  addArticle(form:NgForm){
    this.getData.publishArticle(form.value).subscribe((status:Object)=>{console.log(status);
      this.routeToArticle(status);
    });
  }
  routeToArticle(status){
    console.log(status.article.slug);
    this.data=status.article.slug;
    this.route.navigate(['articles',this.data], { relativeTo: this.router});
  }
  
}
