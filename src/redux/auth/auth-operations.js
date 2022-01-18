import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as userApi from '../../API/userApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.signUp(credentials);
      toast.success('Success sign up');
      return data.result;
    } catch (error) {
      toast.warning('Such account already exists');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const googleAuth = createAsyncThunk(
  'auth/googleAuth',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.googleAuth(credentials);
      token.set(data.result.user.token);

      toast.success('Success Google authorization');
      return data.result;
    } catch (error) {
      toast.warning('Error with Google authorization');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.signIn(credentials);
      token.set(data.result.token);
      toast.success('Success sign in');
      return data.result;
    } catch (error) {
      toast.warning('Something went wrong! Check your the credentials');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await userApi.signOut();
    token.unset();
    toast.warning('You are logged out of your account');
  } catch (error) {
    toast.warning('Something went wrong!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await userApi.getCurrentUser();
      return data.result.user;
    } catch (error) {
      toast.warning('Could not identify you');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/any-route';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('users/register', credentials);
//       token.set(data.token);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('users/login', credentials);
//       token.set(data.token);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );
