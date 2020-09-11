import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySimpleCalculatorComponent } from './my-simple-calculator/my-simple-calculator.component';

@NgModule({
  declarations: [MySimpleCalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [MySimpleCalculatorComponent]
})
export class ExamplesModule { }
