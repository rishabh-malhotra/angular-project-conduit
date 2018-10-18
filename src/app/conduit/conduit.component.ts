import { Component, OnInit } from '@angular/core';
import {GlobalFeedComponent} from '../home/global-feed/global-feed.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConduitService } from './conduit.service'
@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {

  public selected:Array<Object>;

  constructor(private router: ActivatedRoute, private route: Router,private getData: ConduitService) { }

  ngOnInit() {
    this.getData.getArticles().subscribe((status: Array<Object> )=> {
      this.saveArticles(status);
      });
  }
  getArticleDetails(data){
    this.route.navigate(['articles',data]);
   }
saveArticles(articles){
  this.selected=articles;
  console.log(this.selected);
  }
  callSignin(){
    this.route.navigate(["Sign-In"]);
  }
  callSignup(){
    this.route.navigate(['Sign-Up']);
  }
}
