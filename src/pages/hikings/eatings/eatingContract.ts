export interface IEating {
    id: string;
    dayNumber: number;
    eatingTimeId: string;
    eatingTime: {
        id: string;
        name: string
    };
    recipeId: string;
    recipe: {
        name: string;
        kkal: string
    }
}
export interface IGetEatingsPayload {
  page: number;
}

export interface IEatingCreatePayload {
    dayNumber: number;
    eatingTimeId: string;
    eatingTime: {
        id: string;
        name: string
    };
    recipeId: string;
    recipe: {
        name: string;
        kkal: string
    }
}