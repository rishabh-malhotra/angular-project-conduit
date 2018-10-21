import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { DisplayArticleComponent } from '../display-article/display-article.component';

const routes: Routes = [
  { path: 'Home', component: YourFeedComponent },
  { path: 'articles/:slug', component: DisplayArticleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
