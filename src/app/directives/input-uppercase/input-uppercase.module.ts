import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputUppercaseDirective } from './input-uppercase.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputUppercaseDirective
  ],
  exports: [
    InputUppercaseDirective
  ]
})
export class InputUppercaseModule { }
