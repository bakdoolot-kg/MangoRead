import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
  access: "",
  loading: false,
  error: ""
}

// Функция для регистрации
export const signUpUser = createAsyncThunk('signupuser', async (body) => {
  const res = await fetch("http://134.122.75.14:8666/api/auth/signup/", {
    method: "POST",
    body: body
  });

  return await res.json();
})

// Функция для логина
export const signInUser = createAsyncThunk('signinuser', async (body) => {
  try {
    const res = await axios.post("http://134.122.75.14:8666/api/auth/signin/", JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    let data = await res.json()
  
    if (res.status === 200) {
      localStorage.setItem("access", data.access)
      return {...data, user: data.user, access: data.access}
    }
  } catch (e) {
    console.log("error", e);
  }
   
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAccess: (state, action) => {
      state.access = localStorage.getItem("access")
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user")
    },
    logout: (state, action) => {
      state.access = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    // Login ======
    [signInUser.pending]: (state, action) => {
      state.loading = true
    },
    [signInUser.fulfilled]: (state, payload) => {
      state.loading = false;
      if (error) {
        state.error = error;
        console.log(payload);
      } else {
        state.access = access;
        state.user = user;

        localStorage.setItem('access', access);
        localStorage.setItem('user', user);
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true
    },

    // Register ======
    [signUpUser.pending]: (state, action) => {
      state.loading = true
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error
      } else {
        state.msg = msg
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true
    },
  }
})

export const { addAccess, addUser, logout } = userSlice.actions;

export default userSlice.reducer;