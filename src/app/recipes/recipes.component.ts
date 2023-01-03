import { Component, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./layout/recipes.component.css'],
})
export class RecipesComponent {
  SelectedRecipe: Recipe;
  constructor() {}
}
