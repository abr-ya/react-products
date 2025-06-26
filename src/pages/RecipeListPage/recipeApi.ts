import { foodApi } from "@/api/foodApi";
import { IRecipe, IGetRecipesPayload } from "./recipeContracts";

const path = "recipes/";

export const recipeApi = foodApi.injectEndpoints({
  endpoints: (create) => ({
    getRecipesList: create.query<IRecipe[], IGetRecipesPayload>({
      query: () => ({ url: path }),
      providesTags: ["Recipe", { type: "Recipe" }],
    }),
  }),
  overrideExisting: true,
});
