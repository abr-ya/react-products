export interface IEating {
  id: string;
  hikingId: string;
  dayNumber: number;
  eatingTimeId: number;
  recipeId: string;
}

export interface IGetEatingsPayload {
  page: number;
}

export interface IEatingCreatePayload {
  hikingId: string;
  dayNumber: number;
  eatingTimeId: number;
  recipeId: string;
}
