import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { switchMap } from "rxjs/operators";
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
  constructor(private router: ActivatedRoute, private getData: DisplayServiceService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.slug = params.get("slug");
      this.getData.getArticleDetails(this.slug).subscribe((status: Object )=> {
        this.saveData(status);
        });
    })
    
  }
  saveData(data){
    this.selected=data;
    console.log(this.selected);
  }
  addComment(comment: NgForm){
    this.getData.postComment(comment.value,this.slug).subscribe((status: Object )=> {console.log(status)});
  }

}
