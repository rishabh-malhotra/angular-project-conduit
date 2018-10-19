import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute) { }
  public username: string;
  public userimage:string;
  ngOnInit() {
    this.userimage=localStorage.getItem('userimage');
    this.username=localStorage.getItem('username');
  }
  callProfile(){
    this.route.navigate(["My-Profile",localStorage.getItem('username')]);
  }
}
