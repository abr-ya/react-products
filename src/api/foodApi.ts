import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenHelper";
import { foodUrl } from "./api";

const prepareHeaders = (headers: Headers) => {
  const token = getToken();
  if (token) headers.set("authorization", token);

  return headers;
};

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({ baseUrl: foodUrl, prepareHeaders }),
  endpoints: () => ({}),
  tagTypes: ["Product", "User", "Recipe"],
});
