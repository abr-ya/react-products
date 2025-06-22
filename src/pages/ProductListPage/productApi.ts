import { foodApi } from "@/api/foodApi";
import { IGetProductsPayload, IProduct, IProductCreatePayload } from "./productContracts";

const path = "ingredients/";

export const productApi = foodApi.injectEndpoints({
  endpoints: (create) => ({
    getProductsList: create.query<IProduct[], IGetProductsPayload>({
      query: () => ({ url: path }),
      providesTags: ["Product", { type: "Product", id: "detail" }],
    }),
    getProductDetail: create.query<IProduct, string>({
      query: (guid) => ({
        url: `${path}${guid}`,
      }),
      providesTags: ["Product", { type: "Product", id: "detail" }],
      keepUnusedDataFor: 3,
      // transformResponse: normalizeDetailData,
    }),
    createProduct: create.mutation<IProduct, IProductCreatePayload>({
      query: (body) => ({
        url: `${path}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: create.mutation<IProduct, { id: string; payload: IProductCreatePayload }>({
      query: ({ id, payload }) => ({
        url: `${path}${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
  overrideExisting: true,
});
