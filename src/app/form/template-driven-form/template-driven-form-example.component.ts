import { Component } from '@angular/core';
import { Food } from '../../model/food';

@Component({
  selector: 'app-template-driven-form-example',
  template: `
    <div>
      Value: {{formData | json}}
    </div>
    <form class="example-form" (ngSubmit)="onSubmit(formData)" #templateDrivenForm="ngForm">
      <mat-form-field class="example-full-width">
        <mat-label>Favorite food</mat-label>
        <mat-select
          name="food"
          [(ngModel)]="formData.food"
          placeholder="Ex. Pizza"
          required
          #foodControl="ngModel">
          <mat-option *ngFor="let food of foods" [value]="food.value">
            {{food.name}}
          </mat-option>
        </mat-select>
        <mat-error *ngIf="foodControl.errors?.required">Must enter some value</mat-error>
      </mat-form-field>

      <mat-form-field class="example-full-width">
        <mat-label>Leave a comment</mat-label>
        <input
          name="comment"
          [(ngModel)]="formData.comment"
          matInput
          placeholder="Ex. It makes me feel..."
          required
          minlength="4"
          #commentControl="ngModel">
        <mat-error *ngIf="commentControl.errors?.required">Must enter some value</mat-error>
        <mat-error *ngIf="commentControl.errors?.minlength as error">Please enter {{error.requiredLength}} or more characters</mat-error>
      </mat-form-field>

      <button mat-raised-button color="primary" [disabled]="templateDrivenForm.invalid">Submit</button>
    </form>
  `,
  styleUrls: ['./template-driven-form-example.component.scss']
})
export class TemplateDrivenFormExampleComponent {
  formData = { food: '', comment: '' };

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
