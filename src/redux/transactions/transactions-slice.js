import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  transactionsData: {
    createdAt: null,
    income: null,
    expences: null,
    ballance: null,
  },
  token: null,
  isLoading: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setBalanceToState: {
      reducer: (state, action) => {
        state.transactionsData.ballance = action.payload;
      },
    },
  },
  extraReducers: {
    //------------------ Get Data
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [transactionsOperations.getBalance.pending](state, _) {
      state.isLoading = true;
    },
    [transactionsOperations.getBalance.fulfilled](state, action) {
      state.transactionsData.ballance = action.payload;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [transactionsOperations.setBalance.pending](state, action) {
      state.transactionsData.ballance = action.payload;
      state.token = action.payload.token;
      state.isLoading = true;
    },
    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.transactions = action.payload;
      state.token = action.payload.token;
    },
    [transactionsOperations.deleteTransaction.fulfilled](state, action) {
      state.transactions = action.payload;
      state.token = action.payload.token;
    },
  },
});

export const { setBalanceToState } = transactionsSlice.actions;