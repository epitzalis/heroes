import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeListComponent } from './heroe-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [
    HeroeListComponent
  ],
  exports: [
    HeroeListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class HeroeListModule { }
