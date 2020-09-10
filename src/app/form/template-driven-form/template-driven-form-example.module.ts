import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [TemplateDrivenFormExampleComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [TemplateDrivenFormExampleComponent],
})
export class TemplateDrivenFormExampleModule { }
