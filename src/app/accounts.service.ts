import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Account, Accounts } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private baseUrl = `${BASE_URL}/accounts`;

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<Accounts>(this.baseUrl);
  }

  getAccountById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Account>(url);
  }

  createAccount() {
    const url = `${BASE_URL}/clients/current/accounts`;
    return this.http.post<Account>(url, null);
  }

  getClientAccounts() {
    const url = `${BASE_URL}/clients/current/accounts`;
    return this.http.get<Accounts>(url);
  }
}
