import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "@/app/userSlice";
import { bookingApi } from "@/api/bookingApi";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [bookingApi.reducerPath]: bookingApi.reducer,
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(bookingApi.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
