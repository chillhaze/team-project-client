import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

// ДЛЯ ТЕСТОВ
// axios.defaults.baseURL = 'http://localhost:8080/api';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTdkZTM2YjM4YWY5OGIyMzYxNDAzOCIsImlhdCI6MTY0MjgwNTA1OCwiZXhwIjoxNjQyODA4NjU4fQ.6KMqp30vM1jN7VtunjnUChgL6RJPluFC_Masqq1gV2E';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async ({ type, period }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/transactions?type=${type}&period=${period}`,
      );
      return data.data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getBalance = createAsyncThunk(
  'transactions/getBalance',
  async credentials => {
    try {
      const { data } = await axios.get('/transactions', credentials);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const setBalance = createAsyncThunk(
  'transactions/setBalance',
  async credentials => {
    try {
      const { data } = await axios.post('/transactions', credentials);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transactions/add-transaction',
  async credentials => {
    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/transactions',
        credentials,
      );
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
        `http://localhost:8080/api/transactions/${credentials}`,
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
