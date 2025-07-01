import { foodApi } from "@/api/foodApi";
import {
  IRecipe,
  IGetRecipesPayload,
  IRecipeCreatePayload,
  IRecipeToIngredientLink,
  IRecipeToIngredientLinkUpdate,
} from "./recipeContracts";

const path = "recipes/";

export const recipeApi = foodApi.injectEndpoints({
  endpoints: (create) => ({
    getRecipesList: create.query<IRecipe[], IGetRecipesPayload>({
      query: () => ({ url: path }),
      providesTags: ["Recipe", { type: "Recipe" }],
    }),
    getRecipeDetail: create.query<IRecipe, string>({
      query: (id) => ({
        url: `${path}${id}`,
      }),
      providesTags: ["Recipe", { type: "Recipe", id: "detail" }],
    }),
    createRecipe: create.mutation<IRecipe, IRecipeCreatePayload>({
      query: (body) => ({
        url: `${path}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Recipe"],
    }),
    updateRecipe: create.mutation<IRecipe, { id: string; payload: IRecipeCreatePayload }>({
      query: ({ id, payload }) => ({
        url: `${path}${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Recipe"],
    }),
    updateRecipeIngredient: create.mutation<IRecipeToIngredientLink, IRecipeToIngredientLinkUpdate>({
      query: ({ id, quantity, recipeID }) => ({
        url: `${path}${recipeID}/ingredients/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Recipe"],
    }),
  }),
  overrideExisting: true,
});
