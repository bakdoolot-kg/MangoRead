import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "../features/authSlice"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://134.122.75.14:8666/api",
  prepareHeaders: (headers, { getState }) => {
    const access = getState().auth.accessToken
    if (access) {
      headers.set("authorization", `Basic ${access}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  // Если доступ будет закрыт, отправит новый токен доступа
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    const refreshResult = await baseQuery('token/refresh', api, extraOptions)
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setCredentials({ ...refreshResult.data, user}))
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})