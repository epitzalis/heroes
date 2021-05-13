import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeroesApiService } from './services/heroes-api.service';
import { UtilService } from './services/util.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpLoaderInterceptor } from './interceptors/http-loader.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    HeroesApiService,
    UtilService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
