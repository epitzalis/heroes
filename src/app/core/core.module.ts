import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroesApiService } from './services/heroes-api.service';

@NgModule({
  declarations: [],
  imports: [
        CommonModule,
        HttpClientModule
    ],
  providers: [
    HeroesApiService,
  ],
})
export class CoreModule {}