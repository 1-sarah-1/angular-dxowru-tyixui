import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SbbModule } from './sbb.module';
import { SelectReactiveFormsExample } from './select-reactive-forms-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SelectReactiveFormsExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule.forRoot([]),
    SbbModule,
  ],
  providers: [],
  bootstrap: [SelectReactiveFormsExample],
})
export class AppModule {}
