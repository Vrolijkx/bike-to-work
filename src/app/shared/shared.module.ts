import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    MaterialModule.forRoot()
  ],
  exports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
