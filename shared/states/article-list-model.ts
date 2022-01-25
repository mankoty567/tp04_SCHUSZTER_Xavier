import { Injectable } from '@angular/core';
import { Article } from 'shared/models/article';

export class ArticleListModel {
  articles: Article[] = [];
  selected: Article = {
    id: -1,
    name: 'undefined',
    price: 0,
    number: 0,
    description: 'Something went wrong. Please try later !',
  };
}
