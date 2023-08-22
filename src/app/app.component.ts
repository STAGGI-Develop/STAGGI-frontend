import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ClientsService } from './clients.service';
import { Client } from './interfaces';
import { AuthService } from './auth.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  client?: Client;
  openMenu: boolean = false;

  registerRoute: boolean = false;

  constructor(
    private clientService: ClientsService,
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.registerRoute = event.url === '/register';
      }
    });
  }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientService
      .getCurrentClient()
      .subscribe({ next: (client) => (this.client = client) });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.client = undefined;
      this.router.navigate(['/login']);
    });
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
}
