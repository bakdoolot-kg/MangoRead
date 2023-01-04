import {apiSlice} from "../api/apiSlice";

export const mangaApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getManga: builder.query({
      query: (params) => `/v1/manga/?${params.genre ? "genre__title=" + params.genre+"&" : ""}${params.page ? "page=" + params.page : ""}`,
    }),
    getMangaDetails: builder.query({
      query: (id) => `/v1/manga/${id}/`
    }),
    getMangaGenre: builder.query({
      query: () => '/v1/genre'
    }),
    getMangaComments: builder.query({
      query: (id) => `/v1/manga/${id}/comments/`
    }),
    getMangaBySearch: builder.query({
      query: (params) => `/v1/manga/?page=${params.page}&search=${params.searchTerm}`
    }),
    getSortManga: builder.query({
      query: (params) => `/v1/manga/?type=${params.type}${params.genre__title && `&genre__title=${params.genre__title}`}`
    })
  })
})


export const {
  useGetMangaQuery,
  useGetMangaDetailsQuery,
  useGetMangaGenreQuery,
  useGetMangaCommentsQuery,
  useGetMangaBySearchQuery,
  useGetSortMangaQuery
} = mangaApiSlice
