import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { DisplayServiceService } from './display-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {
  public selected: object;
  slug: string;
  public username: string;
  public token: string;
  public match: boolean;
  public comments;
  following:boolean;
  constructor(private router: ActivatedRoute, private getData: DisplayServiceService,
    private route: Router) { }

  ngOnInit() {
    this.match = false;
    this.token=localStorage.getItem('Token');
    this.router.paramMap.subscribe(params => {
      this.slug = params.get("slug");
      this.getData.getArticleDetails(this.slug).subscribe((status: Object) => {
        this.saveData(status);
      });

    })
    //It get all the comments of that particular article
    this.getData.getAllComments(this.slug).subscribe((status: any) => {
      this.comments=status.comments;
    });
  }
  callSignin() {
    this.route.navigate(["Sign-In"]);
  }
  callSignup() {
    this.route.navigate(["Sign-Up"]);
  }
  callProfile(username) {
    console.log(username);
    this.route.navigate(["My-Profile", username])

  }
  saveData(data) {
    this.selected = data;
    this.token = localStorage.getItem('Token');
    this.username = localStorage.getItem('username');
    this.following=data.article.author.following;
    if (this.token) {
      if (this.username === data.article.author.username) {
        this.match = true;
      }
    }
  }
  // saveComments(data) {
  //   this.comments = data;
  // }
  addComment(comment: NgForm) {
    this.getData.postComment(comment.value, this.slug).subscribe((status: any) => { 
      this.comments.push(status.comment); 
    });
  }

  pushComment(data){
    console.log(typeof(this.comments));
    this.comments.push(data.comment);
  }

  deleteComment(id) {
    this.getData.removeComment(id, this.slug).subscribe((status: any) => {
      this.comments.splice(this.comments.indexOf(status.comment),1)
     });
  }
  deleteArticle() {
    this.getData.removeArticle(this.slug).subscribe((status: Object) => {
      console.log("Article Deleted")
      this.route.navigate([`Home`]);
    });
  }

  editArticle() {
    this.route.navigate(['Editor', this.slug]);
  }
  followUser() {
    this.getData.follow(this.selected).subscribe((status) => { console.log(status);
      this.saveFollowing(status);
      })
  }
  favoriteArticle() {
    this.getData.favorite(this.slug).subscribe((status: any) => { console.log(status);
      this.saveData(status); })
  }
  UnfollowUser() {
    this.getData.Unfollow(this.selected).subscribe((status) => { console.log(status);
      this.saveFollowing(status);
      })
  }
  UnfavoriteArticle() {
    this.getData.Unfavorite(this.slug).subscribe((status) => { console.log(status); this.saveData(status); })
  }
  saveFollowing(status){
    this.following=status.profile.following;
  }
}