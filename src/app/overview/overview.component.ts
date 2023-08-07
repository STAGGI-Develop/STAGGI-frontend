import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  client?: Client;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientsService
      .getCurrentClient()
      .subscribe((client) => (this.client = client));
  }
}
