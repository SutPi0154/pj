import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
  reducerPath: "fakeStoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (user) => ({
        url: "/products",
        body: user,
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductQuery } = fakeStoreApi;
