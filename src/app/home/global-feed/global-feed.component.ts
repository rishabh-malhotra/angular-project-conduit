import { Component, OnInit } from '@angular/core';
import { FetchAllArticlesService } from './fetch-all-articles.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  public selected: Array<Object>;
  limit: Number = 10;
  articleCount:Number;
  itemPages:any;
  
  constructor(private fetchAllArticles: FetchAllArticlesService,private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.fetchAllArticles.getArticles().subscribe((status: Array<Object> )=> {
    this.saveArticles(status);
    this.itemPages = Array.from(
      new Array(Math.ceil(+this.articleCount / +this.limit)),
      (val, index) => index + 1
    );
    });
    
    }
    
saveArticles(articles){
  this.selected=articles;
  this.articleCount= articles.articlesCount;
  console.log(this.articleCount);
  }
  
  getArticleDetails(data){
    this.route.navigate(['articles',data]);

  }
  clickonList(e){
    let offset = e * +this.limit;
    this.fetchAllArticles.makeFeedsRequestonPages(offset).subscribe((data) => {
        this.saveArticles(data)
       
    });
  }
}