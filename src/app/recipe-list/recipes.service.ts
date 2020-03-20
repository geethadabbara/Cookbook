import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

const url = environment.baseUrl + environment.recipeUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://localhost:44364',
    'Access-Control-Allow-Credentials': 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(url);
  }

  save(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(url, recipe);
  }

  getById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(url + '/' + id);
  }

  update(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(url + '/' + id, recipe);
  }
  delete(id: number) {
    return this.http.delete(url + '/' + id);
  }
}
