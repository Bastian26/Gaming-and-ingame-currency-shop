import { userReducer } from './reducers/user.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './model/app-state-model';

export const reducers: ActionReducerMap<AppState> = {
  activeUser: userReducer,
};
