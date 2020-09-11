import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-comparison',
  template: `
    <mat-card class="example-card">
      <app-reactive-form-example></app-reactive-form-example>
    </mat-card>

    <mat-card class="example-card">
      <app-template-driven-form-example></app-template-driven-form-example>
    </mat-card>
  `,
  styleUrls: ['./forms-comparison.component.scss']
})
export class FormsComparisonComponent {}
