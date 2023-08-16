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
  selectedAccountType: string | null = 'Own accounts';

  transactionForm = new FormGroup({
    type: new FormControl('Own accounts', [Validators.required]),
    FromAccountNumber: new FormControl(this.accounts[0]?.number || '', [
      Validators.required,
    ]),
    ToAccountNumber: new FormControl('', [Validators.required]),
    Amount: new FormControl(1000, [Validators.required, Validators.min(1)]),
    Description: new FormControl('', [Validators.required]),
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
    this.accountsService.getClientAccounts().subscribe((accounts) => {
      this.accounts = accounts.$values;
      this.transactionForm.controls['FromAccountNumber'].setValue(
        accounts.$values[0].number
      );
      this.setToAccounts({ value: accounts.$values[0].number });
    });
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
