import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  subscription: Subscription;
  recipe: Recipe = new Recipe();
  mealOptions: any[] = [
    { value: 'Breakfast', viewValue: 'Breakfast' },
    { value: 'Lunch', viewValue: 'Lunch' },
    { value: 'Snack', viewValue: 'Snack' },
    { value: 'Dinner', viewValue: 'Dinner' }
  ];
  measures: any[] = [
    { value: 'cup', viewValue: 'cup' },
    { value: 'grams', viewValue: 'grams' },
    { value: 'ml', viewValue: 'ml' },
    { value: 'no', viewValue: 'no' }
  ];

  recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.compose([Validators.required, Validators.minLength(50)])],
    mealType: ['', Validators.required],
    ingredients: this.fb.array([
      this.createIngredient()
    ])
  });

  constructor(private fb: FormBuilder, private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }
  onSubmit() {
    // console.log(this.recipeForm.value);
    this.recipe = this.recipeForm.value;
    if (this.recipe != null) {
      this.subscription = this.recipeService.save(this.recipe).subscribe((result) => {
        console.log(result);
      });
    }
    console.log(JSON.stringify(this.recipe));
    // alert('Yayy! Submitted');
  }
  removeIngredient() {
    this.ingredients.removeAt(this.ingredients.length - 1);
  }
  createIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      measure: ['', Validators.required]
    });
  }
}
