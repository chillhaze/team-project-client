import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6182c42302f60a001775ceca.mockapi.io/mockapi/finance';

export const getFinance = createAsyncThunk(
  'finance/get-finance',
  async credentials => {
    try {
      const { data } = await axios.get('/finance', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getBalance = createAsyncThunk(
  'finance/getBalance',
  async credentials => {
    try {
      const { data } = await axios.get('/finance', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const setBalance = createAsyncThunk(
  'finance/setBalance',
  async credentials => {
    try {
      const { data } = await axios.post('/finance', credentials);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
