import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  mealOptions: string[] = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.compose([Validators.required, Validators.minLength(50)])],
    mealType: ['', Validators.required],
    ingredients: this.fb.array([
      this.createIngredient()
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.recipeForm.value);
    alert('Yayy!!!');
  }
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredients.push(this.createIngredient());
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
