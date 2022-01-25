import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteArticle } from 'shared/actions/article.action';
import { Article } from 'shared/models/article';
import { ArticleList } from 'shared/states/article-list-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  articleList$: Observable<Article[]>;

  constructor(private store: Store) {
    this.articleList$ = this.store.select(ArticleList.getArticles);
  }

  ngOnInit(): void {}

  deleteArticle(item: Article) {
    this.store.dispatch(new DeleteArticle(item));
  }
}
