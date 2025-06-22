import { z } from "zod";
import { ERROR, MAXNAME } from "./productFormConstants";

export const productSchema = z.object({
  name: z.string().min(1, { message: ERROR.NAME }).max(MAXNAME, { message: ERROR.NAME_MAX }),
  price: z.number().min(1, { message: ERROR.PRICE }).max(999, { message: ERROR.PRICE }),
  kkal: z.number().min(1, { message: ERROR.KKAL }).max(999, { message: ERROR.KKAL }),
});

export type ProductSchemaType = z.infer<typeof productSchema>;

export const defaultValues: ProductSchemaType = {
  name: "",
  price: 0,
  kkal: 0,
};
