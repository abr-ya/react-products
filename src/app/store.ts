import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "@/app/userSlice";
import { foodApi } from "@/api/foodApi";
import { bookingApi } from "@/api/bookingApi";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [bookingApi.reducerPath]: bookingApi.reducer,
  [foodApi.reducerPath]: foodApi.reducer,
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(bookingApi.middleware).concat(foodApi.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
