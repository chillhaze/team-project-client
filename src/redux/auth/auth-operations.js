import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/register', credentials);
      token.set(data.data.user.token);
      return data.data;
    } catch (error) {
      toast.warning('Such account already exists');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      token.set(data.data.user.token);

      return data.data;
    } catch (error) {
      toast.warning('Something went wrong! Check your the credentials');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`/api/auth/logout`);
    toast.warning('You are logged out of your account');

    return data.data;
  } catch (error) {
    toast.warning('Something went wrong!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const googleAuth = createAsyncThunk(
  'auth/google',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/auth/google`, credentials);
      toast.success('Success Google authorization');

      return data.result;
    } catch (error) {
      toast.warning('Error with Google authorization');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

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
      const { data } = await axios.get(`/api/auth/current`);
      return data;
    } catch (error) {
      toast.warning('Could not identify you');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
