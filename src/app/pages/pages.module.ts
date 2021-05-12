import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
