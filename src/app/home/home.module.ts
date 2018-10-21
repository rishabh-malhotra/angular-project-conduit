import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { DisplayArticleComponent } from '../display-article/display-article.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component'


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: []
})
export class HomeModule { }
