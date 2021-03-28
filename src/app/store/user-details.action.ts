import { User } from './../models/user.model';
import { Action } from "@ngrx/store";

export const ADD_USER = 'ADD_USER';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) { }
}

export type UserDeatilsAction = AddUser;