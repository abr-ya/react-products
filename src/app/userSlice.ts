import { IUser } from "@/pages/UserPage/userContracts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const USERKEY = "user"; // todo: move to const!

// Get user from localstorage
// @ts-expect-error it's normal case if user is empty!)
const user = JSON.parse(localStorage.getItem(USERKEY));

const initialUser: IUser = {
  details: {
    id: "",
    email: "",
    username: "",
  },
  token: "",
  isAdmin: false,
};

const initialState: IUser = user ?? initialUser;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (_state, { payload }: PayloadAction<IUser>) => {
      localStorage.setItem(USERKEY, JSON.stringify(payload));
      return payload;
    },
    userLogout: () => {
      localStorage.removeItem(USERKEY);
      return { ...initialState, user: initialUser };
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
