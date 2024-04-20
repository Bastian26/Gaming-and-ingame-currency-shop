import { UserState } from "../reducers/user.reducer";

export interface AppState {
  readonly activeUser: UserState;
}
