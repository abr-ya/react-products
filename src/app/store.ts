import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userApi } from "@api/apiQuery";
import userReducer from "@/app/userSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(userApi.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
