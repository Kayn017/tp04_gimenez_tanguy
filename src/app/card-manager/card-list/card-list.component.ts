import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchNamePipe } from '../../search-name.pipe';
import { CardCrudService } from "../../services/card-crud.service";

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchNamePipe
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  // TODO : typer ça parce que bon les anys c'est crade 
  cards: any[] = [];

  searchText = '';

  constructor(cardCrudService: CardCrudService) {
    this.cards = cardCrudService.readCards();
  }
}
