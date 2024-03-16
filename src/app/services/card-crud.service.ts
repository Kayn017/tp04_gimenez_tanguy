import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardCrudService {
  private cards: any[] = [];

  constructor() { }

  createCard(card: any) {
    console.log('CardCrudService.createCard', card);
    this.cards.push(card);
  }

  readCards() {
    console.log('CardCrudService.readCards', this.cards);
    return this.cards;
  }

  updateCard(card: any) {
    console.log('CardCrudService.updateCard', card);
    const index = this.cards.findIndex(c => c.id === card.id);
    this.cards[index] = card;
  }

  deleteCard(card: any) {
    console.log('CardCrudService.deleteCard', card);
    const index = this.cards.findIndex(c => c.id === card.id);
    this.cards.splice(index, 1);
  }
}
