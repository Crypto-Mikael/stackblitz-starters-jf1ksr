import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailsDTO } from '../models/DTOs/CocktailslDTO';

@Injectable()
export class CocktailsService {
  constructor(private http: HttpClient) {}

  public getCocktaislMargarita(): Observable<{ drinks: CocktailsDTO[] }> {
    const params = new HttpParams().set('s', 'margarita');
    return this.http.get<{ drinks: CocktailsDTO[] }>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      { params }
    );
  }
}
