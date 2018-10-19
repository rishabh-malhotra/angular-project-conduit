import { Component, OnInit } from '@angular/core';
import { YourFeedService } from './your-feed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.css']
})
export class YourFeedComponent implements OnInit {

  public selected: Array<Object>;
  limit: Number = 10;
  articleCount:Number
  itemPages:any
  constructor(private getData: YourFeedService,private router: ActivatedRoute,
  private route: Router) { }
  ngOnInit() {
  
  this.getData.yourFeedArticles().subscribe((status: Array<Object>)=>{
    this.saveArticles(status);
    this.itemPages = Array.from(
      new Array(Math.ceil(+this.articleCount / +this.limit)),
      (val, index) => index + 1
    );
  })}
  
  saveArticles(articles){
    this.selected=articles;
    this.articleCount= articles.articlesCount;
    }
    getArticleDetails(data){
      this.route.navigate(['articles',data]);
  
    }
    clickonList(e){
      let offset = e * +this.limit;
      this.getData.makeFeedsRequestonPages(offset).subscribe((data) => {
          this.saveArticles(data)
         
      });
    }
}
