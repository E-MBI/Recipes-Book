import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./layout/recipe-list-component.css'],
})
export class RecipeListComponent {
  @Output() RecipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'potato with spakity and mashroum soup',
      'https://i.pinimg.com/564x/22/8d/bf/228dbf15872c90f73781aef8d8c42427.jpg'
    ),
    new Recipe(
      'Recipe Two',
      'Lorem, ipsum dolor sit amet conilis!',
      'https://i.pinimg.com/564x/22/8d/bf/228dbf15872c90f73781aef8d8c42427.jpg'
    ),
  ];

  onRecipeWasSelected(recipe: Recipe) {
    this.RecipeWasSelected.emit(recipe);
  }
  constructor() {}
}
