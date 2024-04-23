import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../models/user';
import * as UserActions from '../actions/user.actions';

export interface UserState {
  user: User | null;
  loggedIn: boolean;
}

export const initialState: UserState = {
  user: null,
  loggedIn: false
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.login, (state, { user }) => ({
    ...state,
    user,
    loggedIn: true,
  })),
  on(UserActions.logout, state => ({
    ...state,
    user: null,
    loggedIn: false,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
