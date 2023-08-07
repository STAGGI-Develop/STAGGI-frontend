import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../interfaces';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account?: Account;

  constructor(
    private route: ActivatedRoute,
    private accountsService: AccountsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountsService
      .getAccountById(id)
      .subscribe((account) => (this.account = account));
  }

  goBack(): void {
    this.location.back();
  }
}
