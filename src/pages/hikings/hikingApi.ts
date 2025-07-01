import { foodApi } from "@/api/foodApi";
import { IHiking, IGetHikingsPayload, IHikingCreatePayload } from "./hikingContracts";

const path = "hikings/";

export const hikingApi = foodApi.injectEndpoints({
  endpoints: (create) => ({
    getHikingsList: create.query<IHiking[], IGetHikingsPayload>({
      query: () => ({ url: path }),
      providesTags: ["Hiking", { type: "Hiking" }],
    }),
    getHikingDetail: create.query<IHiking, string>({
      query: (id) => ({
        url: `${path}with-products/${id}`,
      }),
      providesTags: ["Hiking", { type: "Hiking", id: "detail" }],
    }),
    createHiking: create.mutation<IHiking, IHikingCreatePayload>({
      query: (body) => ({
        url: `${path}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Hiking"],
    }),
    updateHiking: create.mutation<IHiking, { id: string; payload: IHikingCreatePayload }>({
      query: ({ id, payload }) => ({
        url: `${path}${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Hiking"],
    }),
  }),
  overrideExisting: true,
});
