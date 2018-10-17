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
  constructor(private getData: YourFeedService,private router: ActivatedRoute,
  private route: Router) { }
  ngOnInit() {
  
  this.getData.yourFeedArticles().subscribe((status: Array<Object>)=>{
    this.saveArticles(status);
  })}
  
  saveArticles(articles){
    this.selected=articles;
    console.log(this.selected);
    }
    getArticleDetails(data){
      this.route.navigate(['articles',data]);
  
    }
}
