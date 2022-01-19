import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async credentials => {
    try {
      const { data } = await axios.get('/transactions', credentials);

      return data;
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
      const { data } = await axios.post('/transactions', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transactions/delete-transaction',
  async credentials => {
    try {
      const { data } = await axios.delete(
        `/transactions/${credentials}`,
        credentials,
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getTransactionsStatistic = createAsyncThunk(
  'transactions/statistic',
  async credentials => {
    try {
      const { data } = await axios.get('/transactions', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
