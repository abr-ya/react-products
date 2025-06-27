export interface IRecipe {
  id: string;
  name: string;
  categoryId: string;
  userId: string;
  description: string;
  recipe_ingredients: IIngredientInRecipe[];
  createdAt: Date;
}

export interface IGetRecipesPayload {
  page: number;
}

export interface IIngredientInRecipe {
  id: string;
  recipeId: string;
  ingredientId: string;
  quantity: number;
}
