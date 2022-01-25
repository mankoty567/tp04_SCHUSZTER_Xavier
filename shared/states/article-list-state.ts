import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ArticleListModel } from './article-list-model';
import { AddArticle, DeleteArticle } from 'shared/actions/article.action';

@State<ArticleListModel>({
  name: 'articles',
  defaults: {
    articles: [],
  },
})
@Injectable()
export class ArticleList {
  @Selector()
  static getNbArticles(state: ArticleListModel) {
    return state.articles.length;
  }

  @Selector()
  static getArticles(state: ArticleListModel) {
    return state.articles;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<ArticleListModel>,
    { payload }: AddArticle
  ) {
    const state = getState();
    patchState({
      articles: [...state.articles, payload],
    });
  }

  @Action(DeleteArticle)
  del(
    { getState, patchState }: StateContext<ArticleListModel>,
    { payload }: DeleteArticle
  ) {
    const state = getState();
    patchState({
      articles: [...state.articles.filter((data) => data.id != payload.id)],
    });
  }
}
