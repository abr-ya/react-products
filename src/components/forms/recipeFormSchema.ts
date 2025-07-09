import { z } from "zod";
import { ERROR, MAXNAME } from "./recipeFormConstants";

export const recipeSchema = z.object({
  name: z.string().min(1, { message: ERROR.NAME }).max(MAXNAME, { message: ERROR.NAME_MAX }),
  description: z.string(),
  userId: z.string().min(1),
});

export type RecipeSchemaType = z.infer<typeof recipeSchema>;

export const defaultValues: RecipeSchemaType = {
  name: "",
  description: "",
  userId: "",
};
