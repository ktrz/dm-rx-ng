import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComparisonModule } from './form/comparison/forms-comparison.module';
import { ExamplesModule } from './examples/examples.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsComparisonModule,
    ExamplesModule,
    TasksModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
