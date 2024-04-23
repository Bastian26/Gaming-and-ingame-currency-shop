import { Component, OnInit } from '@angular/core';
import {AxiosService} from "../../services/axios.service";
import { User } from '../../models/user'
import {Store} from "@ngrx/store";
import {AppState} from "../../store/model/app-state-model";
import * as UserActions from "../../store/actions/user.actions";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  componentToShow: string = "welcome";

  constructor(private axiosService: AxiosService,private store: Store<AppState>) { }

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
    this.axiosService.request(
      "POST",
      "/login",
      {
        userName: input.userName,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";

      if (response.data !== null) {
        const user: User = {
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          userName: response.data.userName,
          token: response.data.token
        };

        // store in rxjs store
        this.store.dispatch(UserActions.login({ user }));
        console.log("User " + user.userName + " logged in");
      }
    }).catch(error => {
      console.error("Fehler beim Registrieren:", error);
      this.showErrorToUser("Es ist ein Fehler beim Registrieren aufgetreten. Bitte versuchen Sie es erneut.");
    });
  }

  onRegister(input: any): void {
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
      this.componentToShow = "messages";

      if (response.data !== null) {
        const user: User = {
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          userName: response.data.userName,
          token: response.data.token
        };
        // store in rxjs store
        this.store.dispatch(UserActions.login({ user }));
        console.log("User " + user.userName + " registred/logged in");
      }
    }).catch(error => {
      console.error("Fehler beim Registrieren:", error);
      this.showErrorToUser("Es ist ein Fehler beim Registrieren aufgetreten. Bitte versuchen Sie es erneut.");
    });
  }

  showErrorToUser(message: string): void {
    // Hier die Logik, um die Fehlermeldung in der UI anzuzeigen (Fehlerbanner anzeigen oder ein Modalfenster)
  }

}
