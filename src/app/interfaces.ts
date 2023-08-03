export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accounts: Account[];
  credits: ClientLoan[];
  cards: Card[];
}

export interface Account {
  id: number;
  number: string;
  creationDate: string | Date;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  type: 'DEBIT' | 'CREDIT';
  amount: number;
  description: string;
  date: string | Date;
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

export interface ClientLoan {
  id: number;
  loanId: number;
  name: string;
  amount: number;
  payments: number;
}
