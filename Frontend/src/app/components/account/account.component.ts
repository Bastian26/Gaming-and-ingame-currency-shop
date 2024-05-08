import { Component, OnInit } from '@angular/core';
import {AxiosService} from "../../services/axios.service";
import { User } from '../../models/user'
import {Store} from "@ngrx/store";
import {AppState} from "../../store/model/app-state-model";
import * as UserActions from "../../store/actions/user.actions";
import * as LoadingActions from "../../store/actions/loading.actions";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  componentToShow: string = "welcome";
  user: User = null;
  ngUnsubscribe = new Subject<void>();

  constructor(private axiosService: AxiosService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(state => state)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.user = data?.activeUser?.user;
      });
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
    }, 2000); // Verzögerung von 2 Sekunden
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        userName: input.userName,
        password: input.password,
        email: input.email,
        telNr: input.telNr,
        address: {
          street: input.address.street,
          postalCode: input.address.postalCode,
          country: input.address.country,
        },
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
        email: userResponseData.email,
        telNr: userResponseData.telNr,
        address: userResponseData.address,
        token: userResponseData.data.token
      };

      // store user in ngrx store
      this.store.dispatch(LoadingActions.loadingOff());
      this.store.dispatch(UserActions.login({ user }));
      console.log("User " + user.userName + " logged in");
    }
    return null;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
