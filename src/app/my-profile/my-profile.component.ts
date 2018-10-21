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
  public username:string;
  public userUserName:string;
  public userToken:string;
  limit: Number = 10;
  articleCount:Number;
  itemPages:any;
  public token: string;
  match:boolean;

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.username = params.get("username");
      this.userUserName=localStorage.getItem('username');
      console.log(this.userToken);
      this.userToken=localStorage.getItem('Token');
      this.match=false;
      if(this.userToken){
        if(this.userUserName===this.username){
          this.match=true;
        }
      }
      this.getData.getProfile(this.username).subscribe((status)=>{
        this.saveUser(status,this.username);
        this.callMyArticles();
       })
     
    })
  }
  callProfile(username){
    console.log(username);
    this.route.navigate(["My-Profile",username])
  
  }
  saveUser(data,username){
    this.user=data;
    this.username=username;
    if(localStorage.getItem('Token')){
      this.token=localStorage.getItem('Token');
    }
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
    this.getData.getMyArticles(this.username).subscribe((status)=>{console.log(status);
    this.saveArticles(status);
    });
  }
  callFavoriteArticles(){
    this.getData.getFavoriteArticles(this.username).subscribe((status)=>{console.log(status);
      this.saveArticles(status)
    });
  }
  getArticleDetails(data){
    this.route.navigate(['articles',data]);
  }
  callSignin(){
    this.route.navigate(["Sign-In"]);
  }
  callSignup(){
    this.route.navigate(["Sign-Up"]);
  }
  clickonList(e){
    let offset = e * +this.limit;
    this.getData.makeFeedsRequestonPages(offset).subscribe((data) => {
        this.saveArticles(data)
       
    });
  }
}
