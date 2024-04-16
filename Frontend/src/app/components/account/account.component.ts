import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../../components/account/login-page/login-page.component';
import {AxiosService} from "../../services/axios.service";

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
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    })
  }

  onRegister(input: any): void {
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    })
  }

}
