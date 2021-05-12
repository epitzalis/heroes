import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeFormComponent } from './heroe-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputUppercaseModule } from '../../directives/input-uppercase/input-uppercase.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    InputUppercaseModule
  ],
  declarations: [
    HeroeFormComponent
  ],
  exports: [
    HeroeFormComponent
  ]
})
export class HeroeFormModule { }
