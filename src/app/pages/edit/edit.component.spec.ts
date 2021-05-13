import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditComponent } from './edit.component';

import { of } from 'rxjs';
import { ModelHeroe } from '../../models/heroe.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../core/services/util.service';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

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


const matSnackBarMock = {
  open: () => null,
};

const routerMock = {
  navigate: () => null,
};

const activatedRouteMock = {
  snapshot: {
      paramMap: {
          get(): string {
              return '123';
          }
      }
  }
};

describe('EditComponent', () => {

  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      declarations: [
        EditComponent
      ],
      providers: [
        HeroesApiService,
        UtilService,
        {
          provide: Router,
          useValue: routerMock
        },
        {
          provide: MatSnackBar,
          useValue: matSnackBarMock
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        },
        Overlay
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCancel does a navigate', () => {
    const spy = spyOn(routerMock, 'navigate').and.callThrough();
    component.onCancel();
    expect(spy).toHaveBeenCalled();
  });

  it('onSave calls updateHeroe and in the response launches toast and navigates', () => {
    const service = TestBed.inject(HeroesApiService);
    const heroe: ModelHeroe = heroes[0];
    const spy1 = spyOn(service, 'updateHeroe').and.callFake( () => of(heroe));
    const spy2 = spyOn(routerMock, 'navigate').and.callThrough();
    const spy3 = spyOn(matSnackBarMock, 'open').and.callThrough();
    component.onSave(heroe);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(spy3).toHaveBeenCalled();
  });

});
