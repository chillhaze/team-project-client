import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  transactionsData: [],
  balance: 0,
  type: 'credit',
  period: new Date().toISOString(),
  token: null,
  isLoading: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
  },
  extraReducers: {
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload;
      state.isLoading = false;
    },
    [transactionsOperations.getBalance.pending](state, _) {
      state.isLoading = true;
    },
    [transactionsOperations.getBalance.fulfilled](state, action) {
      state.balance = action.payload;
      state.isLoading = false;
    },
    [transactionsOperations.setBalance.pending](state, _) {
      state.isLoading = true;
    },
    [transactionsOperations.setBalance.fulfilled](state, action) {
      state.transactionsData.balance = action.payload;
      state.isLoading = false;
    },
    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.transactionsData = [
        ...state.transactionsData,
        action.payload.transaction,
      ];
      state.balance = action.payload.balance;
    },
    [transactionsOperations.deleteTransaction.fulfilled](state, action) {
      state.transactionsData = state.transactionsData.filter(
        ({ _id }) => _id !== action.payload._id,
      );
      state.balance = action.payload.balance;
    },
  },
});

export const { setType, setPeriod } = transactionsSlice.actions;
