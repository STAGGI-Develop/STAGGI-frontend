import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Transfer } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseUrl = `${BASE_URL}/transactions`;

  constructor(private http: HttpClient) {}

  createTransaction(transfer: Transfer) {
    return this.http.post(this.baseUrl, transfer, { withCredentials: true });
  }
}
