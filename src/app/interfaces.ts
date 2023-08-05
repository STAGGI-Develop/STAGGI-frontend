export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accounts: Accounts;
  credits: ClientLoans;
  cards: Cards;
}

export interface Clients {
  $values: Client[];
}

export interface Account {
  id: number;
  number: string;
  creationDate: string | Date;
  balance: number;
  transactions: Transactions;
}

export interface Accounts {
  $values: Account[];
}

export interface Transaction {
  id: number;
  type: 'DEBIT' | 'CREDIT';
  amount: number;
  description: string;
  date: string | Date;
}

export interface Transactions {
  $values: Transaction[];
}

export interface Card {
  id: number;
  cardHolder: string;
  type: 'DEBIT' | 'CREDIT';
  color: 'GOLD' | 'SILVER' | 'TITANIUM';
  number: string;
  cvv: number;
  fromDate: string | Date;
  thruDate: string | Date;
}

export interface Cards {
  $values: Card[];
}

export interface ClientLoan {
  id: number;
  loanId: number;
  name: string;
  amount: number;
  payments: number;
}

export interface ClientLoans {
  $values: ClientLoan[];
}

export interface Transfer {
  Amount: number;
  Description: string;
  FromAccountNumber: string;
  ToAccountNumber: string;
}
