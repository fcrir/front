import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ArticleContainerComponent,
    ArticleItemComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path : 'home',
        component: HomeComponent
      },
      {
        path : 'articles/:id',
        component: ArticleItemComponent
      },
      {
        path : 'articles',
        component: ArticleContainerComponent
      },
      {
        path : '*',
        redirectTo: 'home'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
