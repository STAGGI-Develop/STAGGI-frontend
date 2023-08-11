import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ClientsService } from './clients.service';
import { Client } from './interfaces';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // userLoggedIn: boolean = false;
  client?: Client;

  registerRoute: boolean = false;

  constructor(
    private clientService: ClientsService,
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.registerRoute = event.url === '/register';
        console.log(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientService
      .getCurrentClient()
      .subscribe((client) => (this.client = client));
  }

  logout() {
    this.authService.logout().subscribe(() => (this.client = undefined));
  }
}
