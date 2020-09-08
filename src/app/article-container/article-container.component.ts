import { Component, OnInit } from '@angular/core';
import {MAX_ARTICLES} from 'src/app/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector : 'app-article-container',
  templateUrl : './article-container.component.html',
  styleUrls : ['./article-container.component.css']
})
export class ArticleContainerComponent implements OnInit{

  public headerTitle = "Un voyage commence par un pas et un projet  aboutit à un résultat";
  public articles: Observable<string>[] = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    for(let i = 1; i <= MAX_ARTICLES; i++) {
      this.articles.push(
        this.httpClient.get(`/assets/articles/${i}.html`, {responseType: 'text'})
        .pipe(map(response => response.substring(0, 400).replace('h4', 'p').concat('... <em>Lire la suite</em>')))
        );
    }
  }
}
