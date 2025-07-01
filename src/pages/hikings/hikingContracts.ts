import { IIngredientInRecipe } from "@/pages/recipes/recipeContracts";

export interface IHiking {
  id: string;
  name: string;
  daysTotal: number;
  membersTotal: number;
  userId: string;
  eatings: IEating[];
}

export interface IGetHikingsPayload {
  page: number;
}

export interface IHikingCreatePayload {
  name: string;
  daysTotal: number;
  membersTotal: number;
  userId: string;
}

export interface IEating {
  id: string;
  dayNumber: number;
  eatingTimeId: string;
  eatingTime: {
    id: string;
    name: string;
  };
  recipeId: string;
  recipe: {
    name: string;
    kkal: number;
    ingredients: IIngredientInRecipe[];
  };
}
