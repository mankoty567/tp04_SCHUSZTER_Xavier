import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddUser, DeleteUser } from 'shared/actions/user.action';
import { UserModel } from './user-model';

@State<UserModel>({
  name: 'user',
  defaults: {
    firstname: '',
    lastname: '',
    postalCode: 0,
    tel: '',
    mail: '',
    civ: '',
    login: '',
    password: '',
    passwordConfirm: '',
    addresses: [],
  },
})
@Injectable()
export class UserState {
  @Selector()
  static getUser(state: UserModel) {
    return state;
  }

  @Action(AddUser)
  add({ patchState }: StateContext<UserModel>, { payload }: AddUser) {
    patchState({
      ...payload,
    });
  }

  @Action(DeleteUser)
  del({ getState, patchState }: StateContext<UserModel>) {
    patchState({
      firstname: '',
      lastname: '',
      postalCode: 0,
      tel: '',
      mail: '',
      civ: '',
      login: '',
      password: '',
      passwordConfirm: '',
      addresses: [],
    });
  }
}
