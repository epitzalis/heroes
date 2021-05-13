import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UtilService } from './util.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

const matSnackBarMock = {
  open: () => null,
};

describe('UtilService', () => {
  let service: UtilService;

  beforeEach( () => {
    TestBed.configureTestingModule({
        imports: [],
        providers: [
          UtilService,
          {
            provide: MatSnackBar,
            useValue: matSnackBarMock
          },
          Overlay
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach( () => {
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generateId generates an id string', () => {
    const id = service.generateId();
    expect(id.length).toBeGreaterThan(0);
  });

  it('toastSucess throws a toast', () => {
    const spy = spyOn(matSnackBarMock, 'open').and.callThrough();
    service.toastSucess('');
    expect(spy).toHaveBeenCalled();
  });

});
