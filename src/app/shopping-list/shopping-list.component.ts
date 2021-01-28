import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // data is not updated to copy of ingredients array
    // so lets subcribe the event for upadted list of ingredients
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }

}
