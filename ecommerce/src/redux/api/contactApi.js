import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContact: builder.query({
      query: (token) => ({
        url: "/contact",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    // getProfile: builder.query({
    //   query: (token) => ({
    //     url: "user-profile",
    //     headers: { authorization: `Bearer ${token}` },
    //   }),
    // }),
  }),
});

export const { useGetContactQuery } = contactApi;
