import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
// import { ConfirmationDialogModule } from '../components/shared/confirmation-dialog/confirmation-dialog.module';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    // ConfirmationDialogModule
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
