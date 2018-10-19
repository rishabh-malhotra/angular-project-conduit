import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SettingsService } from './settings.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private getData: SettingsService, private route: Router,private router: ActivatedRoute) { }
  public user: Object;
  ngOnInit() {
    this.getData.getProfile().subscribe((status)=>{
      this.saveUser(status);
     
    })
   }
  saveUser(data){
  this.user=data;
  }
  updateSettings(form: NgForm){
    this.getData.updateProfile(form.value).subscribe((status)=>{this.route.navigate(["My-Profile"]);});
    
   }
   
  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('username');
    this.route.navigate([""]);
}

}
