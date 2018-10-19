import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  constructor(private getSignupData:SignupService,private route:Router,private router:ActivatedRoute){}

  ngOnInit() {
  }
  registerUser(form:NgForm){
    this.getSignupData.regUser(form.value).subscribe((status:Object)=>{this.storeData(status)});
    
  }
  storeData(data){
    localStorage.setItem('Token',data.user.token);
    localStorage.setItem('username',data.user.username);
    localStorage.setItem('userimage',data.user.image);
    this.route.navigate(['Home']);
  }
  callSignin(){
    this.route.navigate(["Sign-In"]);
  }
  callSignup(){
    this.route.navigate(["Sign-Up"]);
  }
}
