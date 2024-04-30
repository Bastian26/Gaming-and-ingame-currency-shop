import { Component, OnInit } from '@angular/core';
import {AxiosService} from "../../services/axios.service";
import { User } from '../../models/user'
import {Store} from "@ngrx/store";
import {AppState} from "../../store/model/app-state-model";
import * as UserActions from "../../store/actions/user.actions";
import * as LoadingActions from "../../store/actions/loading.actions";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  componentToShow: string = "welcome";

  constructor(private axiosService: AxiosService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;

    if (componentToShow === "welcome") {
      this.axiosService.setAuthToken(null);
      this.store.dispatch(UserActions.logout());
      console.log("User logged out");
    }
  }

  onLogin(input: any): void {
    this.store.dispatch(LoadingActions.loadingOn());
    this.axiosService.request(
      "POST",
      "/login",
      {
        userName: input.userName,
        password: input.password,
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "account-details";
      this.extractUserFromResponse(response);
    }).catch(error => {
      this.store.dispatch(LoadingActions.loadingOff());
      console.error("Fehler beim Registrieren:", error);
      this.showErrorToUser("Es ist ein Fehler beim Registrieren aufgetreten. Bitte versuchen Sie es erneut.");
    });
  }

  onRegister(input: any): void {
    this.store.dispatch(LoadingActions.loadingOn());
    setTimeout(() => {
      // Ihr vorhandener Code hier
    }, 2000); // Verzögerung von 2 Sekunden
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        userName: input.userName,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "account-details";
      this.extractUserFromResponse(response);
    }).catch(error => {
      this.store.dispatch(LoadingActions.loadingOff());
      console.error("Fehler beim Registrieren:", error);
      this.showErrorToUser("Es ist ein Fehler beim Registrieren aufgetreten. Bitte versuchen Sie es erneut.");
    });
  }

  showErrorToUser(message: string): void {
    // Hier die Logik, um die Fehlermeldung in der UI anzuzeigen (Fehlerbanner anzeigen oder ein Modalfenster)
  }

  extractUserFromResponse(userResponseData: any): void | null {
    if (userResponseData) {
      const user: User = {
        id: userResponseData.data.id,
        firstName: userResponseData.data.firstName,
        lastName: userResponseData.data.lastName,
        userName: userResponseData.data.userName,
        token: userResponseData.data.token
      };

      // store in rxjs store
      this.store.dispatch(LoadingActions.loadingOff());
      this.store.dispatch(UserActions.login({ user }));
      console.log("User " + user.userName + " logged in");
    }
    return null;
  }

}
