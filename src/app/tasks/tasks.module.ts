import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { HttpClientModule } from '@angular/common/http';
import { Task5Component } from './task5/task5.component';
import { RecipesComponent } from './task5/recipes.component';



@NgModule({
  declarations: [Task3Component, Task4Component, Task5Component, RecipesComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [Task3Component, Task4Component, Task5Component]
})
export class TasksModule { }
