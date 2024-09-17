//
//
//
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { servicesReducer } from "./servicesSlice";
import { authReducer } from "./authSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
    products: productsReducer,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
