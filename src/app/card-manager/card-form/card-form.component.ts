import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardCrudService } from '../../services/card-crud.service';

@Component({
  selector: 'card-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.scss'
})
export class CardListComponent {
  cardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]),
    expirationDate: new FormControl('', Validators.required),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  })

  cardCrudService: CardCrudService;

  constructor(cardCrudService: CardCrudService) {
    this.cardCrudService = cardCrudService;
  }

  ngOnSubmit() {
    this.cardCrudService.createCard(this.cardForm.value);
  }

}
