import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./layout/recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
