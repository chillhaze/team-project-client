import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getCategories = createAsyncThunk(
  'categories',
  async credentials => {
    try {
      const { data } = await axios.get('/categories', credentials);
      console.log(data.data.result);
      return data.data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addCategory = createAsyncThunk('categories', async credentials => {
  try {
    const { data } = await axios.post('/categories', credentials);

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
});
