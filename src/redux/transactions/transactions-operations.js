import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async ({ type, period }) => {
    try {
      const { data } = await axios.get(
        `transactions?type=${type}&period=${period}`,
      );
      return data.data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getBallance = createAsyncThunk(
  'ballance/get',
  async (credentials, { getState }) => {
    const tkn = getState().auth.user.token;
    token.set(tkn);
    try {
      const { data } = await axios.get('/balance', credentials);
      return data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const createBallance = createAsyncThunk(
  'ballance/post',
  async (credentials, { getState }) => {
    try {
      const { data } = await axios.post('/balance', {
        value: `${credentials}`,
      });

      return data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transactions/add-transaction',
  async credentials => {
    try {
      const { data } = await axios.post('transactions', credentials);
      return data.data.result;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transactions/delete-transaction',
  async credentials => {
    try {
      const { data } = await axios.delete(
        `transactions/${credentials}`,
        credentials,
      );
      const result = { _id: credentials, ballance: data.data.result.balance };
      return result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const setType = createAsyncThunk('type', async credentials => {
  try {
    const { data } = await axios.get('/transactions', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});
