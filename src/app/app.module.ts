import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from './new-article/new-article.component';
import { SettingsComponent } from './settings/settings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeModule } from './home/home.module';
import { DisplayArticleComponent } from './display-article/display-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ConduitComponent } from './conduit/conduit.component';
import { YourFeedComponent } from './home/your-feed/your-feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListComponent } from './list/list.component';
import { TagsComponent } from './tags/tags.component';


const appRoutes: Routes = [
  { path: 'Home', component: YourFeedComponent },
  { path: '',   component: ConduitComponent },
  { path: 'New-Article', component: NewArticleComponent },
  { path: 'Settings', component: SettingsComponent },
  {path: '#',  component: ConduitComponent},
  { path: 'My-Profile', component: MyProfileComponent },
  { path: 'New-Article/articles/:slug', component: DisplayArticleComponent },
  {path: 'Editor/:slug', component: EditArticleComponent },
  { path: 'Sign-In', component: SignInComponent },
  {path:'Sign-Up', component:SignUpComponent},
  { path: 'My-Profile/:username', component: MyProfileComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewArticleComponent,
    SettingsComponent,
    MyProfileComponent,
    SignInComponent,
    EditArticleComponent,
    ConduitComponent,
    YourFeedComponent,
    DisplayArticleComponent,
    NavbarComponent,
    SignUpComponent,
    ListComponent,
    TagsComponent,
    
    
  ],
  imports: [
    BrowserModule, HttpClientModule,HomeModule
    ,FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
