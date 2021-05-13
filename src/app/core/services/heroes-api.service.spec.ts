import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesApiService } from './heroes-api.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModelHeroe } from '../../models/heroe.model';
import { environment } from '../../../environments/environment';

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

describe('HeroesApiService', () => {

  let service: HeroesApiService;
  let httpMock: HttpTestingController;

  beforeEach( () => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
        providers: [
          HeroesApiService,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach( () => {
    service = TestBed.inject(HeroesApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll( () => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getHeroes return a list of heroes and does a get method', () => {
    service.getHeroes().subscribe((resp: ModelHeroe[]) => {
        expect(resp).toEqual(heroes);
    });
    const req = httpMock.expectOne(`${environment.API_REST_URL}/heroes`);
    expect(req.request.method).toBe('GET');
    req.flush(heroes);
  });

  it('getHeroesFiltered filters correctly and does a get method', () => {
    const heroe: ModelHeroe = heroes[0];
    service.getHeroesFiltered(heroe.name).subscribe((resp: ModelHeroe[]) => {
        expect(resp[0]).toEqual(heroe);
    });
    const req = httpMock.expectOne(`${environment.API_REST_URL}/heroes`);
    expect(req.request.method).toBe('GET');
    req.flush(heroes);
  });

  it('getHeroe return a heroe and does a get method', () => {
    const heroe: ModelHeroe = heroes[0];
    service.getHeroe(heroe.id).subscribe((resp: ModelHeroe) => {
        expect(resp).toEqual(heroe);
    });
    const req = httpMock.expectOne(`${environment.API_REST_URL}/heroes/${heroe.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(heroe);
  });

  it('createHeroe create a hero and does a POST', () => {
    const heroe: ModelHeroe = heroes[0];
    service.createHeroe(heroe).subscribe((resp: ModelHeroe) => {
        expect(resp).toEqual(heroe);
    });
    const req = httpMock.expectOne(`${environment.API_REST_URL}/heroes`);
    expect(req.request.method).toBe('POST');
    req.flush(heroe);
  });

  it('updateHeroe updates and returns a hero and does a PUT', () => {
    const heroe: ModelHeroe = heroes[0];
    service.updateHeroe(heroe).subscribe((resp: ModelHeroe) => {
        expect(resp).toEqual(heroe);
    });
    const req = httpMock.expectOne(`${environment.API_REST_URL}/heroes/${heroe.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(heroe);
  });

  it('deleteHeroe does a delete', () => {
    const heroe: ModelHeroe = heroes[0];
    service.deleteHeroe(heroe.id).subscribe();
    const req = httpMock.expectOne(`${environment.API_REST_URL}/heroes/${heroe.id}`);
    expect(req.request.method).toBe('DELETE');
  });

});
