import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';

const RECIPES: Recipe[] = [
  { id: 1, name: 'name 1', description: 'skjdfkdjfg lkdjgdfkg ', mealType: 'dinner' },
  { id: 2, name: 'didkvnfn', description: 'swoijfvn  dfj kjsdfnvv', mealType: 'Lunch' },
  { id: 3, name: 'iweufhnv', description: 'skjdfkdjfg lkdjgdfkg ', mealType: 'dinner' }
];

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // return of(RECIPES);
    const url = environment.baseUrl + environment.recipeUrl;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  'https://localhost:44364',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get<Recipe[]>(url, httpOptions);
  }
}
