import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent {
  types = ['CREDIT', 'DEBIT'];
  colors = ['SILVER', 'GOLD', 'TITANIUM'];

  cardForm = new FormGroup({
    type: new FormControl(this.types[0], [Validators.required]),
    color: new FormControl(this.colors[0], [Validators.required]),
  });

  constructor(private cardsService: CardsService, private location: Location) {}

  onSubmit() {
    const Type = this.cardForm.value.type;
    const Color = this.cardForm.value.color;
    if (!Type || !Color) return;
    if (
      (Type !== 'CREDIT' && Type !== 'DEBIT') ||
      (Color !== 'SILVER' && Color !== 'GOLD' && Color !== 'TITANIUM')
    )
      return;
    if (this.cardForm.valid) {
      this.createCard({ Type, Color });
    }
  }

  createCard(data: {
    Type: 'CREDIT' | 'DEBIT';
    Color: 'SILVER' | 'GOLD' | 'TITANIUM';
  }) {
    this.cardsService.createCard(data).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
