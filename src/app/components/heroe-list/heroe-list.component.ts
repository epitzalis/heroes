import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModelHeroe } from '../../models/heroe.model';
import { HeroesApiService } from '../../core/services/heroes-api.service';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss']
})
export class HeroeListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  dataHeroesTable = new MatTableDataSource<ModelHeroe>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataHeroesTable.paginator = this.paginator;
  }

  constructor(
    private readonly heroesApiService: HeroesApiService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onEditHeroe(heroe: ModelHeroe): void {
    debugger;
  }

  onDeleteHeroe(heroe: ModelHeroe): void {
    debugger;
  }

  onSearchHeroe(query: string): void {
    this.heroesApiService.getHeroesFiltered(query).subscribe((heroes: ModelHeroe[]) => {
      this.updateDataTable(heroes);
    });
  }

  private getHeroes(): void {
    this.heroesApiService.getHeroes().subscribe((heroes: ModelHeroe[]) => {
      this.updateDataTable(heroes);
    });
  }

  private updateDataTable(heroes: ModelHeroe[]): void {
    this.dataHeroesTable = new MatTableDataSource<ModelHeroe>(heroes);
    this.dataHeroesTable.paginator = this.paginator;
  }


}