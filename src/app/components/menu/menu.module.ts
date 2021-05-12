import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { }
