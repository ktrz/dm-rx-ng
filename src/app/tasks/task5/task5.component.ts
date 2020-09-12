import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-task5',
  template: `
    <app-recipes [recipes]="recipes"></app-recipes>
  `,
  styleUrls: ['./task5.component.scss']
})
export class Task5Component {
  recipes = this.recipesService.getRecipes();

  constructor(private recipesService: RecipesService) { }
}
