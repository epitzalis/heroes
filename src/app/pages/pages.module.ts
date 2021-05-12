import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from '../components/menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    MenuModule
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
