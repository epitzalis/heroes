import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ModelHeroe } from '../../models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable()
export class HeroesApiService {
  private readonly heroesSubject = new Subject<ModelHeroe[]>();
  private readonly $getHeroesFiltered = this.heroesSubject.asObservable();

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getHeroes(): Observable<ModelHeroe[]> {
    const url = `${environment.API_REST_URL}/heroes`;
    return this.httpClient.get<ModelHeroe[]>(url);
  }

  public getHeroe(id: string): Observable<ModelHeroe[]> {
    const url = `${environment.API_REST_URL}/heroes/${id}`;
    return this.httpClient.get<ModelHeroe[]>(url);
  }

  public getHeroesFiltered(query: string): Observable<ModelHeroe[]> {
    query = query.toLocaleLowerCase();
    this.httpClient
      .get<ModelHeroe[]>(`${environment.API_REST_URL}/heroes`)
      .pipe(
        map((heroes: ModelHeroe[]) =>
        heroes.filter(
            (heroe: ModelHeroe) => heroe.name.toLocaleLowerCase().includes(query)
          )
        )
      )
      .subscribe((heroes: ModelHeroe[]) => {
        this.heroesSubject.next(heroes);
      });
    return this.$getHeroesFiltered;
  }

  public deleteHeroe(id: string): Observable<object> {
    const url = `${environment.API_REST_URL}/heroes/${id}`;
    return this.httpClient.delete(url);
  }


}
