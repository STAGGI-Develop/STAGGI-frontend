import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Card, Cards } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private baseUrl = `${BASE_URL}/clients/current/cards`;

  constructor(private http: HttpClient) {}

  createCard(data: {
    Type: 'CREDIT' | 'DEBIT';
    Color: 'SILVER' | 'GOLD' | 'TITANIUM';
  }) {
    return this.http.post<Card>(this.baseUrl, data);
  }

  getCards() {
    return this.http.get<Cards>(this.baseUrl);
  }
}
