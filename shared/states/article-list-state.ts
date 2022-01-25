import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ArticleListModel } from './article-list-model';
import {
  AddArticle,
  DeleteArticle,
  SetSelected,
} from 'shared/actions/article.action';

@State<ArticleListModel>({
  name: 'articles',
  defaults: {
    articles: [],
    selected: {
      id: -1,
      name: 'undefined',
      price: 0,
      number: 0,
      description: 'Something went wrong. Please try later !',
    },
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

  @Selector()
  static getSelectedDesc(state: ArticleListModel) {
    return state.selected.description;
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

  @Action(SetSelected)
  update(
    { patchState }: StateContext<ArticleListModel>,
    { payload }: SetSelected
  ) {
    patchState({
      selected: payload,
    });
  }
}
