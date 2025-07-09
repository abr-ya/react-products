import { IProductCreatePayload } from "@/pages/ProductListPage/productContracts";
import { ProductSchemaType } from "./productFormSchema";
import { IRecipeCreatePayload } from "@/pages/recipes/recipeContracts";
import { RecipeSchemaType } from "./recipeFormSchema";

export const normalizeProductParams = ({ name }: ProductSchemaType): IProductCreatePayload => ({
  name: name.trim(),
  price: 0,
  kkal: 0,
});

export const normalizeRecipeParams = ({ name, description, userId }: RecipeSchemaType): IRecipeCreatePayload => ({
  name: name.trim(),
  description,
  userId
});