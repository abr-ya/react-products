import { z } from "zod";
import { ERROR, MAXNAME } from "./productFormConstants";

export const productSchema = z.object({
  name: z.string().min(1, { message: ERROR.NAME }).max(MAXNAME, { message: ERROR.NAME_MAX }),
  price: z.string(),
  kkal: z.string(),
});

export type ProductSchemaType = z.infer<typeof productSchema>;

export const defaultValues: ProductSchemaType = {
  name: "",
  price: "",
  kkal: "",
};
