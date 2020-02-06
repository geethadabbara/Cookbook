import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable, of } from 'rxjs';

const RECIPES: Recipe[] = [
  { Id: 1, Name: 'name 1', Description: 'skjdfkdjfg lkdjgdfkg ', MealType: 'dinner' },
  { Id: 2, Name: 'didkvnfn', Description: 'swoijfvn  dfj kjsdfnvv', MealType: 'Lunch' },
  { Id: 3, Name: 'iweufhnv', Description: 'skjdfkdjfg lkdjgdfkg ', MealType: 'dinner' }
];

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // return of(RECIPES);
    const url = "https://localhost:44364/api/Recipes";
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  'https://localhost:44364',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get<Recipe[]>(url, httpOptions);
  }
}
