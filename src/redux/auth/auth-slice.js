import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: { name: 'testUserName', email: 'test' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  getCurrentUser: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateName: {
      reducer: (state, action) => {
        state.user.name = action.payload;
      },
    },
  },
  extraReducers: {
    //------------------ Register
    [authOperations.signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.signUp.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.signUp.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
    //------------------ Login
    [authOperations.signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.signIn.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.signIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.signOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.googleAuth.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
    },
  },
});

export const { updateName } = authSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import * as authOperations from './auth-operations';

// const initialState = {
//   user: { name: '', email: '', balance: 0 },
//   token: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   // reducers: {
//   //   setEmail: (state, action) => {
//   //     state.user.email = action.payload;
//   //   },
//   //   setName: (state, action) => {
//   //     state.user.name = action.payload;
//   //   },
//   //   setToken: (state, action) => {
//   //     state.token = action.payload;
//   //   },
//   //   setisLoggedIn: (state, action) => {
//   //     state.isLoggedIn = action.payload;
//   //   },
//   // },
//   // redusers: {
//   //     GoogleAuth: (state, action) => {
//   //         state.user.email = action.payload.email;
//   //         state.isLoggedIn = true;
//   //         state.error = null;
//   //     },
//   // },
//   extraReducers: {
//     [authOperations.signUp.fulfilled](state, action) {
//       state.user = action.payload.user;
//       // state.token = action.payload.token;
//       // state.isLoggedIn = true;
//     },
//     [authOperations.signIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.getCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//     },
//     [authOperations.signOut.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },

//     [authOperations.googleAuth.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.user.token;
//       state.isLoggedIn = true;
//     },
//   },
// });

// export default authSlice.reducer;
