import { createReducer, on, Action } from '@ngrx/store';
import * as LoadingActions from '../actions/loading.actions';

export interface LoadingState {
  loading: boolean;
}

export const initialState: LoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(LoadingActions.loadingOn, (state) => ({
    ...state,
    loading: true,
  })),
  on(LoadingActions.loadingOff, state => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: LoadingState | undefined, action: Action) {
  return loadingReducer(state, action);
}
