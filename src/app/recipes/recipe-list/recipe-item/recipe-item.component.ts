import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./layout/recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() SelectedRecipe = new EventEmitter<void>();

  constructor() {}

  onSelecteRecipe() {
    this.SelectedRecipe.emit();
  }
}
