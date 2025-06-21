import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "@/app/userSlice";
import { productsApi } from "@/api/productsApi";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(productsApi.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
