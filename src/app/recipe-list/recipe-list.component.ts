import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(data => {
      this.recipes = data;
      console.log('data::' + data);
    });
  }

}
