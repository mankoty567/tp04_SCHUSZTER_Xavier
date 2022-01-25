import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Article } from 'shared/models/article';
import { ArticleList } from 'shared/states/article-list-state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  //On a besoin d'un selectedArticle

  description$: Observable<string>;

  constructor(private store: Store) {
    this.description$ = this.store.select(ArticleList.getSelectedDesc);
  }

  ngOnInit(): void {}
}
