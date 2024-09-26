import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@api/contracts";

interface IUserState extends IUser {}

const USERKEY = "user"; // todo: move to const!

// Get user from localstorage
// @ts-expect-error it's normal case if user is empty!)
const user = JSON.parse(localStorage.getItem(USERKEY));

const initialUser: IUserState = {
  data: {
    name: "",
    about: "",
    avatar: "",
    _id: "",
    email: "",
    group: "",
  },
  token: "",
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
