import { IProduct, IProductCreatePayload } from "@/pages/ProductListPage/productContracts";
import { ProductSchemaType } from "./productFormSchema";
import { AddIngredientParamsType, IRecipeCreatePayload } from "@/pages/recipes/recipeContracts";
import { RecipeSchemaType } from "./recipeFormSchema";
import { ProductToRecipeFormSchemaType } from "./productToRecipeFormSchema";

export const normalizeProductParams = ({ name }: ProductSchemaType): IProductCreatePayload => ({
  name: name.trim(),
  price: 0,
  kkal: 0,
});

export const normalizeRecipeParams = ({ name, description, userId }: RecipeSchemaType): IRecipeCreatePayload => ({
  name: name.trim(),
  description,
  userId,
});

export const normalizeAddProductParams = (
  { productId, quantity }: ProductToRecipeFormSchemaType,
  recipeID: string,
): AddIngredientParamsType => ({
  quantity,
  recipeID,
  ingredientId: productId.value,
});

export const prepareProductToSelect = ({ id, name }: IProduct) => ({ label: name, value: id });
