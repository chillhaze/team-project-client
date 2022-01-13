import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations.js';

const initialState = {
  user: { name: "testUserName", email: "test" },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //------------------ Register
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.register.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.register.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
    //------------------ Login
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.login.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.login.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});
