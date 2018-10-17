import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from "@angular/router";
import { EditService } from './edit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  public slug:string;
  public article:Object;

  constructor(private route:Router,private router:ActivatedRoute,private getData:EditService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.slug = params.get("slug");
      this.getData.getArticleDetails(this.slug).subscribe((status: Object )=> {
          this.saveData(status);
          });
      })
  }
  saveData(data){
    this.article=data;
    console.log(this.article);
  }
  updateArticle(form: NgForm){
    this.getData.modifyArticle(this.slug,form.value).subscribe((status: Object)=>{console.log(status);
    this.route.navigate(['New-Article/articles',this.slug]);
    });
  }

}
