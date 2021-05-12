import { Component } from '@angular/core';
import { ModelHeroe } from '../../models/heroe.model';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { UtilService } from '../../core/services/util.service';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(
    private readonly heroesApiService: HeroesApiService,
    private readonly utilService: UtilService,
    private readonly router: Router
  ) { }

  public onSave(heroe: ModelHeroe): void {
    heroe.id = this.utilService.generateId();
    this.heroesApiService.createHeroe(heroe).subscribe( () => {
      this.utilService.toastSucess('Heroe creado correctamente');
      this.router.navigate([`/${ROUTES.HOME}`]);
    });
  }

  public onCancel(): void {
    this.router.navigate([`/${ROUTES.HOME}`]);
  }

}
