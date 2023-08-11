import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Account, Transfer } from '../interfaces';
import { AccountsService } from '../accounts.service';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  accounts: Account[] = [];
  toAccounts: Account[] = [];

  accountTypes = ['Own accounts', 'Third party accounts'];
  selectedAccountType: string | null = null;

  transactionForm = new FormGroup({
    type: new FormControl(''),
    FromAccountNumber: new FormControl(''),
    ToAccountNumber: new FormControl(''),
    Amount: new FormControl(0),
    Description: new FormControl(''),
  });

  constructor(
    private accountsService: AccountsService,
    private transactionsService: TransactionsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountsService
      .getClientAccounts()
      .subscribe((accounts) => (this.accounts = accounts.$values));
  }

  onSubmit() {
    const FromAccountNumber = this.transactionForm.value.FromAccountNumber;
    const ToAccountNumber = this.transactionForm.value.ToAccountNumber;
    const Amount = this.transactionForm.value.Amount;
    const Description = this.transactionForm.value.Description;

    if (!FromAccountNumber || !ToAccountNumber || !Amount || !Description) {
      return;
    }

    this.createTransaction({
      FromAccountNumber,
      ToAccountNumber,
      Amount,
      Description,
    });
  }

  createTransaction(data: Transfer) {
    this.transactionsService
      .createTransaction(data)
      .subscribe(() => this.router.navigate(['/accounts']));
  }

  goBack(): void {
    this.location.back();
  }

  setAccountType(target: any) {
    if (!target?.value) return;
    this.selectedAccountType = target.value;
  }

  setToAccounts(target: any) {
    if (!target?.value) return;

    if (this.selectedAccountType?.includes('Own accounts')) {
      this.toAccounts = this.accounts.filter(
        (a) => !target.value.includes(a.number)
      );
    }
  }
}
