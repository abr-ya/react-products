import { z } from "zod";

export const productToRecipeFormSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
});

export type ProductToRecipeFormSchemaType = z.infer<typeof productToRecipeFormSchema>;

export const defaultValues: ProductToRecipeFormSchemaType = {
  productId: "",
  quantity: 0,
};
