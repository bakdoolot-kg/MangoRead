import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, accessToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, access, remembered } = action.payload
      state.user = user
      state.accessToken = access

      if (remembered) {
        localStorage.setItem("access", access)
        localStorage.setItem("user", user)
      }
    },
    logOut: (state, action) => {
      state.user = null
      state.accessToken = null
      localStorage.removeItem("user")
      localStorage.removeItem("access")
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user || localStorage.getItem("user")
export const selectCurrentAccess = (state) => state.auth.accessToken || localStorage.getItem("access")
