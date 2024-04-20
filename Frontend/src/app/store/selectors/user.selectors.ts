import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

// Erstelle ein FeatureSelector für den Benutzerzustand
export const selectUserState = createFeatureSelector<UserState>('user');

// Erstelle einen Selector, um den Benutzer aus dem Benutzerzustand zu selektieren
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
