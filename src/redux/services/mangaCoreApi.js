import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mangaCoreApi = createApi({
  reducerPath: 'mangaCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '134.122.75.14:8666/api',
    prepareHeaders: (headers) => {
      headers.set('X-CSRFToken', '')
    }
  })
})