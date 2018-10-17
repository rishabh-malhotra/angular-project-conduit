import { Component, OnInit } from '@angular/core';
import {GlobalFeedComponent} from '../home/global-feed/global-feed.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  callSignin(){
    this.route.navigate(["Sign-In"]);
  }
  callSignup(){
    this.route.navigate(['Sign-Up']);
  }
}
