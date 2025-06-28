import { foodApi } from "@/api/foodApi";
import { IEating, IGetEatingsPayload, IEatingCreatePayload } from "./eatingContracts";

const path = "eatings/";

export const eatingApi = foodApi.injectEndpoints({
  endpoints: (create) => ({
    getEatingsList: create.query<IEating[], IGetEatingsPayload>({
      query: () => ({ url: path }),
      providesTags: ["Eating", { type: "Eating" }],
    }),
    getEatingDetail: create.query<IEating, string>({
      query: (id) => ({
        url: `${path}${id}`,
      }),
      providesTags: ["Eating", { type: "Eating", id: "detail" }],
    }),
    createEating: create.mutation<IEating, IEatingCreatePayload>({
      query: (body) => ({
        url: `${path}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Eating"],
    }),
    updateEating: create.mutation<IEating, { id: string; payload: IEatingCreatePayload }>({
      query: ({ id, payload }) => ({
        url: `${path}${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Eating"],
    }),
  }),
  overrideExisting: true,
});
