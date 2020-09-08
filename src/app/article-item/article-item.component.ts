import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MAX_ARTICLES} from 'src/app/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector : 'app-article-item',
  templateUrl : './article-item.component.html',
  styleUrls : ['./article-item.component.css'],
})
export class ArticleItemComponent implements OnInit{

  public title = "Un voyage commence par un pas et un projet  aboutit à un résultat";
  public articleContent$: Observable<string>;

  private articleId = 1;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient){
    const params = this.activatedRoute.snapshot.paramMap;
    const id = +params.get('id');
    this.articleId = isNaN(id) ? 1 : (id > MAX_ARTICLES || id === 0) ? 1 : id;
  }
  ngOnInit(): void {
    this.articleContent$ = this.httpClient.get(`/assets/articles/${this.articleId}.html`,{
      responseType: 'text'
    }
    );
  }
}
