import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArticleList } from 'shared/states/article-list-state';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css'],
})
export class TetiereComponent implements OnInit {
  nb$: Observable<Number>;

  constructor(private store: Store) {
    this.nb$ = this.store.select(ArticleList.getNbArticles);
  }

  ngOnInit(): void {}
}
