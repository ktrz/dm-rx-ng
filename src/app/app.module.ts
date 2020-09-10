import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormExampleModule } from './form/reactive-form/reactive-form-example.module';
import { TemplateDrivenFormExampleModule } from './form/template-driven-form/template-driven-form-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormExampleModule,
    TemplateDrivenFormExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
