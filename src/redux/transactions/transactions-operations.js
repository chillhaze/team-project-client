import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

// ДЛЯ ТЕСТОВ
// axios.defaults.baseURL = 'http://localhost:8080/api/';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTdkZTM2YjM4YWY5OGIyMzYxNDAzOCIsImlhdCI6MTY0MjYxODU3NiwiZXhwIjoxNjQyNjIyMTc2fQ.w6Tq-bt5odljXgsmi58ZlaLkrxjb7_cJ4igSK6hHbhc';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
