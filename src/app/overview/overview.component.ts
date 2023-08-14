import { Component, OnInit } from '@angular/core';
import { Client, Transaction } from '../interfaces';
import { ClientsService } from '../clients.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  client?: Client;
  latestTransactions?: Transaction[];

  constructor(
    private clientsService: ClientsService,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    this.getClient();
    this.getLatestTransactions();
  }

  getClient() {
    this.clientsService.getCurrentClient().subscribe((client) => {
      this.client = client;
    });
  }

  getLatestTransactions() {
    this.accountsService.getClientAccounts().subscribe((accounts) => {
      const allTransactions = accounts.$values.flatMap(
        (acc) => acc.transactions.$values
      );

      this.latestTransactions = allTransactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
    });
  }
}
