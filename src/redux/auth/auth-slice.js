import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: { name: '', email: '', avatarURL: '', token: '' },
  isUserLoggedIn: false,
  isLoadingUser: false,
  getCurrentUser: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth: {
      reducer: (state, action) => {
        state.user = action.payload;
      },
    },
    updateName: {
      reducer: (state, action) => {
        state.user.name = action.payload;
      },
    },
  },
  extraReducers: {
    //------------------ Register
    [authOperations.registerUser.pending](state, action) {
      state.isUserLoggedIn = false;
      state.isLoadingUser = true;
      state.error = '';
    },
    [authOperations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoadingUser = false;
      state.isUserLoggedIn = true;
    },
    [authOperations.registerUser.rejected](state, action) {
      state.isUserLoggedIn = false;
      state.isLoadingUser = false;
      state.error = action.payload.message;
    },
    //------------------ Login
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isUserLoggedIn = true;
      state.isLoadingUser = false;
    },
    [authOperations.login.pending](state, action) {
      state.isUserLoggedIn = false;
      state.isLoadingUser = true;
      state.error = '';
    },
    [authOperations.login.rejected](state, action) {
      state.isUserLoggedIn = false;
      state.isLoadingUser = false;
      state.error = action.payload.message;
    },
    //------------------ Logout
    [authOperations.logout.fulfilled](state, action) {
      state.user = null;
      state.isUserLoggedIn = false;
    },
    //------------------ Google Auth

    //------------------ Get Current User
    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    [authOperations.updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload;
      state.isUserLoggedIn = true;
    },
  },
});

export const { googleAuth, updateName } = authSlice.actions;
