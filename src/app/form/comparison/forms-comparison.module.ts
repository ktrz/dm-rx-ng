import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComparisonComponent } from './forms-comparison.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormExampleModule } from '../reactive-form/reactive-form-example.module';
import { TemplateDrivenFormExampleModule } from '../template-driven-form/template-driven-form-example.module';

@NgModule({
  declarations: [FormsComparisonComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormExampleModule,
    TemplateDrivenFormExampleModule,
  ],
  exports: [FormsComparisonComponent]
})
export class FormsComparisonModule { }
