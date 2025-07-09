export interface IRecipe {
  id: string;
  name: string;
  categoryId: string;
  userId: string;
  description: string;
  ingredients: IIngredientInRecipe[];
  createdAt: Date;
}

export interface IGetRecipesPayload {
  page: number;
}

export interface IRecipeCreatePayload {
  name: string;
  description: string;
  userId: string;
}

export interface IIngredientInRecipe {
  id: string;
  ingredient: {
    id: string;
    name: string;
    kkal: number;
  };
  quantity: number;
}

export interface IRecipeToIngredientLink {
  id: string;
  recipeID: string;
  ingredientId: string;
  quantity: number;
}

export interface IRecipeToIngredientLinkUpdate {
  id: string;
  recipeID: string;
  quantity: number;
}

export type AddIngredientParamsType = Omit<IRecipeToIngredientLink, "id">;
