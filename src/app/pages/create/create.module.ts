import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroeFormModule } from '../../components/heroe-form/heroe-form.module';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeroeFormModule
  ],
  declarations: [
    CreateComponent,
  ]
})
export class CreateModule { }
