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
  
  constructor(private fetchAllArticles: FetchAllArticlesService,private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.fetchAllArticles.getArticles().subscribe((status: Array<Object> )=> {
    this.saveArticles(status);
    });
    }
    
saveArticles(articles){
  this.selected=articles;
  }
  
  getArticleDetails(data){
    this.route.navigate(['articles',data], { relativeTo: this.router});

  }
}