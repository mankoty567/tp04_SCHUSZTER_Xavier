import { User } from 'shared/models/user';

export class AddUser {
  static readonly type = '[User] Add';

  constructor(public payload: User) {}
}

export class DeleteUser {
  static readonly type = '[User] Del';

  constructor(public payload: User) {}
}
