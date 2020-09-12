import { Component, Input } from '@angular/core';
import { Recipe } from './recipes.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  template: `
    <input #search (input)="searchSubject.next(search.value)">
    <input #checked type="checkbox" (change)="checkedSubject.next(checked.checked)">

    <ul>
      <li *ngFor="let recipe of filteredRecipes3$ | async">
        <div>Name: {{recipe.name}}</div>
        <div>Ingredients: {{recipe.ingredients.join(', ')}}</div>
      </li>
    </ul>
  `,
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipesSubject = new BehaviorSubject<Recipe[]>([]);
  searchSubject = new BehaviorSubject<string>('');
  checkedSubject = new BehaviorSubject<boolean>(false);

  filteredRecipes$ = combineLatest([
    this.recipesSubject,
    this.searchSubject,
  ]).pipe(
    map(([recipes, ingredient]) => {
      return recipes.filter(recipe => recipe.ingredients.some(i => i.includes(ingredient)));
    })
  );

  ingredients$ = this.searchSubject.pipe(
    map(search => search
      .trim()
      .split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => !!ingredient)
    )
  );

  filteredRecipes2$ = combineLatest([
    this.recipesSubject,
    this.ingredients$,
  ]).pipe(
    map(([recipes, ingredients]) =>
      recipes.filter(recipe => recipe.ingredients
        .some(i => ingredients.some(ingredient => i.includes(ingredient))))
    )
  );

  filteredRecipes3$ = combineLatest([
    this.recipesSubject,
    this.ingredients$,
    this.checkedSubject
  ]).pipe(
    map(([recipes, ingredients, checked]) =>
      recipes.filter(recipe => checked
        ? ingredients.every(ingredient => recipe.ingredients.some(i => i.includes(ingredient)))
        : recipe.ingredients
          .some(i => ingredients.some(search => i.includes(search)))
      )
    )
  );

  @Input() set recipes(recipes: Recipe[]) {
    this.recipesSubject.next(recipes);
  }

}
