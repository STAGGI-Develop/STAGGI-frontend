import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, Clients } from './interfaces';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private baseUrl = `${BASE_URL}/clients`;

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<Clients>(this.baseUrl);
  }

  getClientById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  getCurrentClient() {
    const url = `${this.baseUrl}/current`;
    return this.http.get<Client>(url);
  }

  createClient(credentials: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    return this.http.post<Client>(this.baseUrl, credentials);
  }
}
