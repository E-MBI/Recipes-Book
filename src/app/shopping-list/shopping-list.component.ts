import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./layout/shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 5),
  ];

  ing: Ingredient = { amount: 0, name: '' };

  constructor() {}
  ngOnInit() {}

  // onAddIngredient(ing: any) {
  //   console.log('form parent', ing);
  //   this.ingredients.push(ing);
  // }

  onAddIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
