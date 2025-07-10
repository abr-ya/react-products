import { z } from "zod";
import { ERRORS } from "./productToRecipeConstants";

const LabelValue = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const productToRecipeFormSchema = z.object({
  // null just for init
  productId: LabelValue.nullable().refine((value) => value !== null, ERRORS.PRODUCT),
  quantity: z.number(),
});

export type ProductToRecipeFormSchemaType = z.infer<typeof productToRecipeFormSchema>;

export const defaultValues: ProductToRecipeFormSchemaType = {
  // @ts-expect-error не лучшее решение, но пока так) todo
  productId: null,
  // @ts-expect-error пустое значение вылядит лучше, чем 0, todo
  quantity: "",
};
