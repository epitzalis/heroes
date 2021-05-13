import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HeroeFormComponent } from './heroe-form.component';
import { HeroesApiService } from '../../core/services/heroes-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

const routerMock = {
  navigate: () => null,
};

describe('HeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        HeroeFormComponent
      ],
      providers: [
        HeroesApiService,
        {
          provide: Router,
          useValue: routerMock
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeFormComponent);
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

  it('onSave emits with the EventEmitter Save', () => {
    const spy = spyOn(component.save, 'emit').and.callThrough();
    component.onSave();
    expect(spy).toHaveBeenCalled();
  });

});
