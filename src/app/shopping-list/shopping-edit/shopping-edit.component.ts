import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./layout/shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('recipeInput') recipeInput: ElementRef;
  @ViewChild('recipeAmount') recipeAmount: ElementRef;
  @Output() ingrdAdded = new EventEmitter<Ingredient>();
  @Output() ingrdName = new EventEmitter<Ingredient>();
  ing: Ingredient = { amount: 0, name: '' };
  validName: any = '';
  validAmount: number = 0;

  onchange() {
    this.validName = this.recipeInput.nativeElement.value;
    this.validAmount = this.recipeAmount.nativeElement.value;
  }

  onAddedIng() {
    const ingName = this.recipeInput.nativeElement.value;
    const ingAmount = this.recipeAmount.nativeElement.value;
    let newIngredient: Ingredient = {
      name: ingName,
      amount: ingAmount,
    };
    this.ingrdAdded.emit(newIngredient);
  }

  onAddName() {
    this.ingrdName.emit(this.ing);
  }
}
