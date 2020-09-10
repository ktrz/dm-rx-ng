import { Component } from '@angular/core';
import { Food } from '../../model/food';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  template: `
    <div>Value: {{form.value | json}}</div>
    <form class="example-form" [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
      <mat-form-field class="example-full-width">
        <mat-label>Favorite food</mat-label>
        <mat-select placeholder="Ex. Pizza" formControlName="food">
          <mat-option *ngFor="let food of foods" [value]="food.value">
            {{food.name}}
          </mat-option>
        </mat-select>
        <mat-error *ngIf="form.get('food').errors?.required">Must enter some value</mat-error>
      </mat-form-field>

      <mat-form-field class="example-full-width">
        <mat-label>Leave a comment</mat-label>
        <input matInput placeholder="Ex. It makes me feel..." formControlName="comment">
        <mat-error *ngIf="form.get('comment').errors?.minlength as error">Please enter {{error.requiredLength}} or more characters
        </mat-error>
        <mat-error *ngIf="form.get('comment').errors?.required">Must enter some value</mat-error>
      </mat-form-field>

      <button mat-raised-button color="primary" [disabled]="form.invalid">Submit</button>
    </form>

  `,
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent {
  form = new FormGroup({
    food: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  foods: Food[] = [
    {
      value: '1',
      name: 'Sushi'
    },
    {
      value: '2',
      name: 'Pizza'
    },
    {
      value: '3',
      name: 'Kebab'
    },
    {
      value: '4',
      name: 'Fries'
    },
  ];

  onSubmit(value): void {
    console.log('submitting...');
    console.log(value);
  }
}

