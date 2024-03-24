import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]
    ),
    new Recipe(
      'Another Test Recipe 2',
      'This is simply a test',
      'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 2)]

    ),
  ];

  constructor() {}

  getRecipes() {
    return this._recipes.slice();
  }
}
