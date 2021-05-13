import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModelHeroe } from '../../models/heroe.model';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { UtilService } from '../../core/services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes';
import { ConfirmDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss']
})
export class HeroeListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  dataHeroesTable = new MatTableDataSource<ModelHeroe>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataHeroesTable.paginator = this.paginator;
  }

  constructor(
    private readonly heroesApiService: HeroesApiService,
    private readonly utilService: UtilService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.loadTable();
  }

  onEditHeroe(heroe: ModelHeroe): void {
    this.router.navigate([`/${ROUTES.EDIT}`, heroe.id]);
  }

  onDeleteHeroe(heroe: ModelHeroe): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
          title: this.translate.instant('dialog.confirm.sure'),
          message: this.translate.instant('dialog.confirm.eliminate_hero', {name: heroe.name})
      }
    });

    dialogRef.afterClosed().subscribe((dialogResult: boolean) => {
      if (dialogResult) {
        this.heroesApiService.deleteHeroe(heroe.id).subscribe(() => {
          this.loadTable();
          this.utilService.toastSucess(this.translate.instant('toast.eliminated_hero', {name: heroe.name}));
        });
      }
    });
  }

  onSearchHeroe(query: string): void {
    this.heroesApiService.getHeroesFiltered(query).pipe(take(1)).subscribe((heroes: ModelHeroe[]) => {
      this.updateDataTable(heroes);
    });
  }

  onCreateHeroe(): void {
    this.router.navigate([`/${ROUTES.CREATE}`]);
  }

  private loadTable(): void {
    this.heroesApiService.getHeroes().subscribe((heroes: ModelHeroe[]) => {
      this.updateDataTable(heroes);
    });
  }

  private updateDataTable(heroes: ModelHeroe[]): void {
    this.dataHeroesTable = new MatTableDataSource<ModelHeroe>(heroes);
    this.dataHeroesTable.paginator = this.paginator;
  }

}
