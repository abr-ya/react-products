import { bookingApi } from "@/api/bookingApi";
import { IGetProductsPayload, IProduct, IProductCreatePayload } from "./productContracts";

export const productApi = bookingApi.injectEndpoints({
  endpoints: (create) => ({
    getProductsList: create.query<IProduct[], IGetProductsPayload>({
      query: () => ({ url: "products/" }),
      providesTags: ["Product", { type: "Product", id: "detail" }],
    }),
    getProductDetail: create.query<IProduct, string>({
      query: (guid) => ({
        url: `products/${guid}`,
      }),
      providesTags: ["Product", { type: "Product", id: "detail" }],
      keepUnusedDataFor: 3,
      // transformResponse: normalizeDetailData,
    }),
    updateProduct: create.mutation<IProduct, { id: string; payload: IProductCreatePayload }>({
      query: ({ id, payload }) => ({
        url: `products/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
  overrideExisting: true,
});
