import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
    console.log("recipe -", this.recipe);
  }

}
