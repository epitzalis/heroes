import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroesApiService } from './services/heroes-api.service';
import { UtilService } from './services/util.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
        CommonModule,
        HttpClientModule,
        MatSnackBarModule
    ],
  providers: [
    HeroesApiService,
    UtilService
  ],
})
export class CoreModule {}
