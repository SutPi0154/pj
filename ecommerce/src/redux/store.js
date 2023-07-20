import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./services/AuthSlice";
import { contactApi } from "./api/contactApi";
import { fakeStoreApi } from "./api/fakeStoreApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    authSlice: authSlice,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      contactApi.middleware,
      fakeStoreApi.middleware
    ),
});
