import {apiSlice} from "../api/apiSlice";

export const mangaApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getManga: builder.query({
      query: ({page, type}) => `/v1/manga/?${type ? "type=" + type + "&" : ""}${page ? "page=" + page : ""}`,
    }),
    getMangaDetails: builder.query({
      query: (id) => `/v1/manga/${id}/`
    }),
    getMangaGenre: builder.query({
      query: () => '/v1/genre'
    }),
    getMangaComments: builder.query({
      query: (id) => `/v1/manga/${id}/comments/`
    })
  })
})


export const {
  useGetMangaQuery,
  useGetMangaDetailsQuery,
  useGetMangaGenreQuery,
  useGetMangaCommentsQuery
} = mangaApiSlice
