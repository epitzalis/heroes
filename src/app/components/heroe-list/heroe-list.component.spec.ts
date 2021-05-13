import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HeroeListComponent } from './heroe-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { UtilService } from '../../core/services/util.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ModelHeroe } from '../../models/heroe.model';
import { of } from 'rxjs';


describe('HeroeListComponent', () => {
  let component: HeroeListComponent;
  let fixture: ComponentFixture<HeroeListComponent>;

  const routerMock = {
    navigate: () => null,
  };

  const heroes: ModelHeroe[] = [
    {
      id: '44UHNNF334F6',
      name: 'Iron Man'
    },
    {
      id: '45UHNNF334F7',
      name: 'Gamora'
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        MatSnackBarModule,
        MatDialogModule
      ],
      declarations: [
        HeroeListComponent
      ],
      providers: [
        HeroesApiService,
        UtilService,
        {
          provide: Router,
          useValue: routerMock
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeListComponent);
    component = fixture.componentInstance;
    const service = TestBed.inject(HeroesApiService);
    spyOn(service, 'getHeroes').and.callFake( () => of(heroes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onEditHeroe does a navigate', () => {
    const heroe = heroes[0];
    const spy = spyOn(routerMock, 'navigate').and.callThrough();
    component.onEditHeroe(heroe);
    expect(spy).toHaveBeenCalled();
  });

  it('onCreateHeroe does a navigate', () => {
    const spy = spyOn(routerMock, 'navigate').and.callThrough();
    component.onCreateHeroe();
    expect(spy).toHaveBeenCalled();
  });

  it('onSearchHeroe returns an array of heroes', () => {
    const service = TestBed.inject(HeroesApiService);
    const spy = spyOn(service, 'getHeroesFiltered').and.callFake( () => of(heroes));
    component.onSearchHeroe('');
    expect(spy).toHaveBeenCalled();
  });


});
