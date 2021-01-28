import { Recipe } from './recipe.model'

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test recipe Description',
        'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg'),
        
        new Recipe('Test 2 Recipe', 'Test recipe Description',
        'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg')
      ];

    getRecipe() {
        return this.recipes;
    }
}