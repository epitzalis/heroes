import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModelHeroe } from '../../models/heroe.model';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { UtilService } from '../../core/services/util.service';
import { ConfirmDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes';

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
    private readonly heroesApiService: HeroesApiService,
    private readonly utilService: UtilService,
    private readonly dialog: MatDialog,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onEditHeroe(heroe: ModelHeroe): void {
    debugger;
  }

  onDeleteHeroe(heroe: ModelHeroe): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
          title: '¿Estás seguro?',
          message: 'Va a eliminar el heroe ' + heroe.name}
    });

    dialogRef.afterClosed().subscribe((dialogResult: boolean) => {
      if (dialogResult) {
        this.heroesApiService.deleteHeroe(heroe.id).subscribe(() => {
          this.getHeroes();
          this.utilService.toastSucess('Ha eliminado el heroe ' + heroe.name);
        });
      }
    });
  }

  onSearchHeroe(query: string): void {
    this.heroesApiService.getHeroesFiltered(query).subscribe((heroes: ModelHeroe[]) => {
      this.updateDataTable(heroes);
    });
  }

  onCreateHeroe(): void {
    this.router.navigate([`/${ROUTES.CREATE}`]);
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