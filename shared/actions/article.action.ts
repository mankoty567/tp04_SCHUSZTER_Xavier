import { Article } from 'shared/models/article';

export class AddArticle {
  static readonly type = '[Article] Add';

  constructor(public payload: Article) {}
}

export class DeleteArticle {
  static readonly type = '[Article] Del';

  constructor(public payload: Article) {}
}

export class SetSelected {
  static readonly type = '[Article] Update';

  constructor(public payload: Article) {}
}
