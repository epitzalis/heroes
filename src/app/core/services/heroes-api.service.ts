import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ModelHeroe } from '../../models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable()
export class HeroesApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getHeroes(): Observable<ModelHeroe[]> {
    const url = `${environment.API_REST_URL}/heroes`;
    return this.httpClient.get<ModelHeroe[]>(url);
  }

  public getHeroe(id: string): Observable<ModelHeroe> {
    const url = `${environment.API_REST_URL}/heroes/${id}`;
    return this.httpClient.get<ModelHeroe>(url);
  }

  public updateHeroe(heroe: ModelHeroe): Observable<ModelHeroe> {
    const url = `${environment.API_REST_URL}/heroes/${heroe.id}`;
    return this.httpClient.put<ModelHeroe>(url, heroe);
  }

  public getHeroesFiltered(query: string): Observable<ModelHeroe[]> {
    query = query.toLocaleLowerCase();
    return this.httpClient
      .get<ModelHeroe[]>(`${environment.API_REST_URL}/heroes`)
      .pipe(
        map((heroes: ModelHeroe[]) =>
        heroes.filter(
            (heroe: ModelHeroe) => heroe.name.toLocaleLowerCase().includes(query)
          )
        )
      );
  }

  public deleteHeroe(id: string): Observable<object> {
    const url = `${environment.API_REST_URL}/heroes/${id}`;
    return this.httpClient.delete(url);
  }

  public createHeroe(heroe: ModelHeroe): Observable<ModelHeroe> {
    const url = `${environment.API_REST_URL}/heroes`;
    return this.httpClient.post<ModelHeroe>(url, heroe);
  }


}
