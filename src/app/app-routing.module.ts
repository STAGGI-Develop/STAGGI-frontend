import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CardsComponent } from './cards/cards.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/:id', component: AccountComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards/create', component: CreateCardComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
