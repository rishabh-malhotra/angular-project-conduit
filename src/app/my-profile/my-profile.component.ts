import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './my-profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private getData: MyProfileService, private route: Router,private router: ActivatedRoute) { }
  public user: Object;
  public articles: Array<object>;
  limit: Number = 10;
  articleCount:Number
  itemPages:any

  ngOnInit() {
    this.getData.getProfile().subscribe((status)=>{
      this.saveUser(status);
      this.callMyArticles();
     
    })
  }
  saveUser(data){
    this.user=data;
    }
    saveArticles(data){
      this.articles=data;
      this.articleCount=data.articlesCount;
      this.itemPages = Array.from(
        new Array(Math.ceil(+this.articleCount / +this.limit)),
        (val, index) => index + 1
      );
    }
  callSettings(){
      this.route.navigate(["Settings"]);
    }
  callMyArticles(){
    this.getData.getMyArticles().subscribe((status)=>{console.log(status);
    this.saveArticles(status);
    });
  }
  callFavoriteArticles(){
    this.getData.getFavoriteArticles().subscribe((status)=>{console.log(status);
      this.saveArticles(status)
    });
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
