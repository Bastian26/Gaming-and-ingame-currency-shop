import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../../components/account/login-page/login-page.component';
import {AxiosService} from "../../services/axios.service";
import { User } from '../../models/user'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  componentToShow: string = "welcome";

  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
  }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;

    if (componentToShow === "welcome") {
      this.axiosService.setAuthToken(null);
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
        const newUser: User = {
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          userName: response.data.userName,
          token: response.data.token
        };

        // store in rxjs store

      }
    }).catch(error => {
      // Fehlerbehandlung
      console.error("Fehler beim Registrieren:", error);
      // Hier kannst du eine Fehlermeldung an die UI senden
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
    }).catch(error => {
      // Fehlerbehandlung
      console.error("Fehler beim Registrieren:", error);
      // Hier kannst du eine Fehlermeldung an die UI senden
      this.showErrorToUser("Es ist ein Fehler beim Registrieren aufgetreten. Bitte versuchen Sie es erneut.");
    });
  }

  showErrorToUser(message: string): void {
    // Hier implementierst du die Logik, um die Fehlermeldung in der UI anzuzeigen
    // Zum Beispiel kannst du eine Fehlermeldung in einem Fehlerbanner anzeigen oder ein Modalfenster öffnen
  }

}
