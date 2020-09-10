import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormExampleComponent } from './reactive-form-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ReactiveFormExampleComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormExampleComponent]
})
export class ReactiveFormExampleModule {}
