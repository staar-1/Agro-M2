// src/services/postsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  // Mude a URL base
  baseQuery: fetchBaseQuery({ baseUrl: 'https://brasilapi.com.br/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      // Mude a rota para a API de bancos
      query: () => 'banks/v1',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;