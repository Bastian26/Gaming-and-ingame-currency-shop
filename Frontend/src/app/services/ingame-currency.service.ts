import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AxiosService} from "./axios.service";
import {IngameCurrency} from "../models/IngameCurrency";

@Injectable({
  providedIn: 'root'
})
export class IngameCurrencyService {

  constructor(private http: HttpClient, private axiosService: AxiosService) { }

  getAllCurrencies(id: number): Promise<IngameCurrency[]> {
    return this.axiosService.request(
      "GET",
      "/ingameCurrencies",
      {});
  }

  getCurrencyById(id: number): Promise<IngameCurrency> {
    return this.axiosService.request(
      "GET",
      `/ingameCurrency/${id}`,
      {});

  }

  createCurrency(currency: IngameCurrency): Promise<IngameCurrency> {
    return this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: "vorname",
        lastName: "nachname"
      });
  }

/*  updateCurrency(currency: IngameCurrency): Observable<IngameCurrency> {
    return this.http.put<IngameCurrency>(`${this.baseUrl}/currencies/${currency.id}`, currency);
  }

  deleteCurrency(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/currencies/${id}`);
  }

  addCurrencyToUser(userId: number, currency: UserIngameCurrency): Observable<UserIngameCurrency> {
    return this.http.post<UserIngameCurrency>(`${this.baseUrl}/users/${userId}/currencies`, currency);
  }

  updateUserCurrency(userId: number, currencyId: number, amount: number): Observable<UserIngameCurrency> {
    return this.http.put<UserIngameCurrency>(`${this.baseUrl}/users/${userId}/currencies/${currencyId}`, { amount });
  }

  removeCurrencyFromUser(userId: number, currencyId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${userId}/currencies/${currencyId}`);
  }*/
}
