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
      toast.success(
        'Вы успешно зарегистрировались. Перейдите на страницу входа',
      );
      return data.data;
    } catch (error) {
      toast.warning('Такой аккаунт уже существует');
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
      toast.warning('Что-то пошло не так! Проверьте свои учетные данные');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post(`auth/logout`);
    toast.warning('Вы вышли из своей учетной записи');

    return data.data;
  } catch (error) {
    toast.warning('Что-то пошло не так!!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const googleAuth = createAsyncThunk(
//   'auth/google',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/auth/google`, credentials);
//       toast.success('Success Google authorization');

//       return data.result;
//     } catch (error) {
//       toast.warning('Error with Google authorization');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, { getState, rejectWithValue }) => {
    const tkn = getState().auth.user.token;

    token.set(tkn);
    try {
      const { data } = await axios.get(`users/current`);
      return data.data.user;
    } catch (error) {
      toast.warning('Could not identify you');
      return rejectWithValue(error.message);
    }
  },
);
export const updateAvatar = createAsyncThunk(
  'users/avatars',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch(`users/avatars`, credentials);
      toast.success('Аватарка успешно обновлена');

      return data.avatarURL;
    } catch (error) {
      toast.warning('Error with Google authorization');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
