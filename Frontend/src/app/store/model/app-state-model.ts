import { UserState } from "../reducers/user.reducer";
import {LoadingState} from "../reducers/loading.reducer";

export interface AppState {
  readonly activeUser: UserState;
  readonly isLoading: LoadingState;
}
