import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CardsComponent } from './cards/cards.component';
import { TransferComponent } from './transfer/transfer.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/:accountId', component: AccountComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
