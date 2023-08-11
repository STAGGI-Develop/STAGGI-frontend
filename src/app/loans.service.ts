import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { ClientLoan, LoanApplication, Loans } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoansService {
  private baseUrl = `${BASE_URL}/loans`;

  constructor(private http: HttpClient) {}

  postLoan(data: LoanApplication) {
    return this.http.post<ClientLoan>(this.baseUrl, data, {
      withCredentials: true,
    });
  }

  getLoans() {
    return this.http.get<Loans>(this.baseUrl, { withCredentials: true });
  }
}
