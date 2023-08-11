import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoansService } from '../loans.service';
import { Account, Loan, LoanApplication } from '../interfaces';
import { AccountsService } from '../accounts.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  loans: Loan[] = [];
  accounts: Account[] = [];

  selectedLoanPayments: string[] = [];

  loanForm = new FormGroup({
    LoanId: new FormControl(0),
    Amount: new FormControl(0),
    Payments: new FormControl(''),
    ToAccountNumber: new FormControl(''),
  });

  constructor(
    private loansService: LoansService,
    private accountsService: AccountsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLoans();
    this.getAccounts();
  }

  onSubmit() {
    const LoanId = this.loanForm.value.LoanId;
    const Amount = this.loanForm.value.Amount;
    const Payments = this.loanForm.value.Payments;
    const ToAccountNumber = this.loanForm.value.ToAccountNumber;

    if (!LoanId || !Amount || !Payments || !ToAccountNumber) {
      return;
    }

    this.applyForLoan({ LoanId, Amount, Payments, ToAccountNumber });
  }

  getLoans() {
    this.loansService
      .getLoans()
      .subscribe((loans) => (this.loans = loans.$values));
  }

  getAccounts() {
    this.accountsService
      .getClientAccounts()
      .subscribe((accounts) => (this.accounts = accounts.$values));
  }

  applyForLoan(data: LoanApplication) {
    console.log(data);
    this.loansService
      .postLoan(data)
      .subscribe(() => this.router.navigate(['/accounts']));
  }

  setSelectedLoanPayments(target: any) {
    if (!target) return;
    const loanId = target.value.split(': ')[1];
    const loan = this.loans.find((l) => l.id == loanId);
    console.log({ loans: this.loans, loanId, loan });
    if (loan) {
      this.selectedLoanPayments = loan!.payments.split(',');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
