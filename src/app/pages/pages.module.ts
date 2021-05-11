import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PrincipalModule } from './principal/principal.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // PrincipalModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
