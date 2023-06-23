import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktails } from '../models/DTOs/CocktailslDTO';

@Injectable()
export class CocktailsServiceService {
  constructor(private http: HttpClient) {}

  public getCocktaislMargarita(
    request: string
  ): Observable<{ drinks: Cocktails[] }> {
    const params = new HttpParams().set('s', 'margarita');
    return this.http.get<{ drinks: Cocktails[] }>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      { params }
    );
  }
}
