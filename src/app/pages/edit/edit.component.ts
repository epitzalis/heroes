import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelHeroe } from '../../models/heroe.model';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { UtilService } from '../../core/services/util.service';
import { ROUTES } from '../../constants/routes';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  heroe: ModelHeroe;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly heroesApiService: HeroesApiService,
    private readonly utilService: UtilService,
  ) { }

  ngOnInit(): void {
    this.consultHeroe();
  }

  public onSave(heroe: ModelHeroe): void {
    this.heroesApiService.updateHeroe(heroe).subscribe( () => {
      this.utilService.toastSucess('Heroe editado correctamente');
      this.router.navigate([`/${ROUTES.HOME}`]);
    });
  }

  private consultHeroe(): void {
    const idHeroe = this.activatedRoute.snapshot.paramMap.get('id');
    if (idHeroe) {
      this.heroesApiService.getHeroe(idHeroe).subscribe((heroe: ModelHeroe) => {
        this.heroe = heroe;
      });
    }
  }

  public onCancel(): void {
    this.router.navigate([`/${ROUTES.HOME}`]);
  }

}
