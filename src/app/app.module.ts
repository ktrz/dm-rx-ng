import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComparisonModule } from './form/comparison/forms-comparison.module';
import { ExamplesModule } from './examples/examples.module';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
