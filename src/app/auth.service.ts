import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${BASE_URL}/auth`;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials, { withCredentials: true });
  }

  logout() {
    const url = `${this.baseUrl}/logout`;
    return this.http.post(url, null);
  }
}
