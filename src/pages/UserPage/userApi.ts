import { bookingApi } from "@/api/bookingApi";
import { IUser, IUserCreatePayload, IUserLoginPayload } from "./userContracts";

export const userApi = bookingApi.injectEndpoints({
  endpoints: (create) => ({
    newUser: create.mutation<IUser, IUserCreatePayload>({
      query(body) {
        return {
          url: "signup",
          method: "POST",
          body,
        };
      },
    }),
    login: create.mutation<IUser, IUserLoginPayload>({
      query(body) {
        return {
          url: "auth/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: true,
});
