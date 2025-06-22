import { IProductCreatePayload } from "@/pages/ProductListPage/productContracts";
import { ProductSchemaType } from "./productFormSchema";

export const normalizeProductParams = ({ name }: ProductSchemaType): IProductCreatePayload => ({
  name: name.trim(),
  price: 0,
  kkal: 0,
});
