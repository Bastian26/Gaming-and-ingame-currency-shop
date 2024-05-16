import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    // default backend connection settings
    axios.defaults.baseURL = "http://localhost:8080"
    axios.defaults.headers.post["Content-Type"] = "application/json"
  }

  getAuthToken(): string | null {
    return window.sessionStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token != null) {
      return window.sessionStorage.setItem("auth_token", token);
    } else {
      window.sessionStorage.removeItem("auth_token");
    }
  }

  request(method: string, url: string, data:any): Promise<any> {
    const authToken = this.getAuthToken();
    const headers = authToken ? {"Authorization": "Bearer " + authToken} : {};

    return axios ({
        method: method,
        url: url,
        data: data,
        headers: headers
    });
  }


  //todo: remove later - is only for testing purpose
  /*requestWithDelay(method: string, url: string, data:any, delayMilliseconds: number): Promise<any> {
    let headers = {};
    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    // Verzögerung mit setTimeout hinzufügen
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios({
          method: method,
          url: url,
          data: data,
          headers: headers
        }).then(response => {
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      }, delayMilliseconds);
    });
  }*/
}
