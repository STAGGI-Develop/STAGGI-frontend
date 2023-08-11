import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../interfaces';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards?: Card[];
  debitCards?: Card[];
  creditCards?: Card[];

  constructor(private http: CardsService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.http.getCards().subscribe((cards) => {
      this.cards = cards.$values;
      this.debitCards = this.cards.filter((c) => c.type === "DEBIT");
      this.creditCards = this.cards.filter((c) => c.type === "CREDIT");
    });
  }
}
