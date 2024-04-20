import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../models/user';
import * as UserActions from '../actions/user.actions';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    user
  })),
  on(UserActions.logout, state => ({
    ...state,
    user: null
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
