import { IngredientViewModel } from './IngredientViewModel';

export class RecipeViewModel {
    public name: string;
    public description: string;
    public mealType: string;
    public ingredients: IngredientViewModel[];
}
