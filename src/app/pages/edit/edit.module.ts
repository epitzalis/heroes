import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroeFormModule } from '../../components/heroe-form/heroe-form.module';

const routes: Routes = [
  {
    path: '',
    component: EditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeroeFormModule
  ],
  declarations: [
    EditComponent
  ],
})
export class EditModule { }
