import { IProductCreatePayload } from "@/pages/ProductListPage/productContracts";
import { ProductSchemaType } from "./productFormSchema";

export const normalizeProductParams = ({ name, price, kkal }: ProductSchemaType): IProductCreatePayload => ({
  name: name.trim(),
  price,
  kkal,
});
