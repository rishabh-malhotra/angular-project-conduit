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


const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'New-Article', component: NewArticleComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'My-Profile', component: MyProfileComponent },
  { path: 'New-Article/articles/:slug', component: DisplayArticleComponent },
  {path: 'Editor/:slug', component: EditArticleComponent }
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
