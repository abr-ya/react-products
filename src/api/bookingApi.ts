import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenHelper";
import { bookingUrl } from "./api";

const prepareHeaders = (headers: Headers) => {
  const token = getToken();
  if (token) headers.set("authorization", token);

  return headers;
};

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: bookingUrl, prepareHeaders }),
  endpoints: () => ({}),
  tagTypes: ["Product", "User"],
});
