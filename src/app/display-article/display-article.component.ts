import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { DisplayServiceService } from './display-service.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {
public selected: object;
slug: string;
comments:Array<Object>;
public username:string;
public token: string;
public match:boolean;
  constructor(private router: ActivatedRoute, private getData: DisplayServiceService,private route: Router) { }

  ngOnInit() {
    this.match=false;
    this.router.paramMap.subscribe(params => {
      this.slug = params.get("slug");
      this.getData.getArticleDetails(this.slug).subscribe((status: Object )=> {
        this.saveData(status);
        });
    })

    this.getData.getAllComments(this.slug).subscribe((status: Array<Object>)=>{
      this.saveComments(status);
    }); 
  }
  
  saveData(data){
    this.selected=data;
    this.token = localStorage.getItem('Token');
    this.username = localStorage.getItem('username');
    if(this.token){
      if(this.username===data.article.author.username){
         this.match=true;
      }
  }
  }
  saveComments(data){
    this.comments=data;
  }
  addComment(comment: NgForm){
    this.getData.postComment(comment.value,this.slug).subscribe((status: Object )=> {console.log(status)});
    this.getData.getAllComments(this.slug).subscribe((status: Array<Object>)=>{
    this.saveComments(status);
    this.route.navigate([`New-Article/articles/${this.slug}`]);
    });
  }
  deleteComment(id){
    this.getData.removeComment(id,this.slug).subscribe((status:Object)=>{});
    this.getData.getAllComments(this.slug).subscribe((status: Array<Object>)=>{
      this.saveComments(status);
      this.route.navigate([`New-Article/articles/${this.slug}`]);
      });
  }
  deleteArticle(){
    this.getData.removeArticle(this.slug).subscribe((status:Object)=>{});
    this.goToHome();
    
  }
  callSignin(){
    this.route.navigate(["Sign-In"]);
  }
  callSignup(){
    this.route.navigate(["Sign-Up"]);
  }
  goToHome(){
  this.route.navigate(['Home']);
  }
  editArticle(){
    this.route.navigate(['Editor',this.slug]);
  }
  followUser(){
    this.getData.follow(this.selected).subscribe((status)=>{console.log(status)})
  }
  favoriteArticle(){
    this.getData.favorite(this.slug).subscribe((status)=>{console.log(status)})
  }
  callProfile(username){
    console.log(username);
    this.route.navigate(["My-Profile",username])
  
  }
}

