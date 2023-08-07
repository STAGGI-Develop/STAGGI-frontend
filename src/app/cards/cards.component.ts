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

  constructor(private http: CardsService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.http.getCards().subscribe((cards) => (this.cards = cards.$values));
  }
}
