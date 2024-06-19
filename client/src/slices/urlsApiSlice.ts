import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface SubmitUrlBodyProps {
  originalUrl: string;
}

export const urlsApiSlice = createApi({
  reducerPath: 'urlsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUrl: builder.query<string, string>({
      query: (shortenUrlKey) => ({
        url: `/urls/${encodeURIComponent(shortenUrlKey)}`,
        responseHandler: 'text',
      }),
    }),
    submitUrl: builder.mutation<string, SubmitUrlBodyProps>({
      query: (body: SubmitUrlBodyProps) => ({
        url: '/urls',
        method: 'POST',
        body,
        responseHandler: 'text',
      }),
    }),
  }),
});

export const { useGetUrlQuery, useSubmitUrlMutation } = urlsApiSlice;
