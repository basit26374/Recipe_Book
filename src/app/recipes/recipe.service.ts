import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test recipe Description',
        'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg'),
        
        new Recipe('Test 2 Recipe', 'Test recipe Description',
        'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg')
      ];

    getRecipe() {
        // due to 'slice()', return copy of recipes
        return this.recipes.slice();
    }
}