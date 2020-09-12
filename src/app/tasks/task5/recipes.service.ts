import { Injectable } from '@angular/core';

export interface Recipe {
  name: string;
  ingredients: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  getRecipes(): Recipe[] {
    return [{
      name: 'pizza',
      ingredients: ['flour', 'water', 'salt', 'cheese', 'tomatoes']
    }, {
      name: 'sushi',
      ingredients: ['rice', 'nori', 'vinegar', 'salmon', 'avocado']
    }, {
      name: 'bread',
      ingredients: ['water', 'flour', 'salt', 'yeast']
    }, {
      name: 'stir & fry',
      ingredients: ['rice', 'tofu', 'salt', 'pepper', 'chilli', 'vegetables', 'oil']
    }, {
      name: 'lasagne',
      ingredients: ['pasta', 'tomatoes', 'meat', 'cheese', 'oregano', 'basil', 'oil']
    }, {
      name: 'cookies',
      ingredients: ['flour', 'milk', 'sugar', 'chocolate', 'baking powder', 'butter']
    },
    ];
  }
}
