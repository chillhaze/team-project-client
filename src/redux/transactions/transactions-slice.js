import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations';
import * as financeOperations from '../finance/finance-operations';

const initialState = {
  transactionsData: [],
  transaction: null,
  token: null,
  isLoadingTransactions: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    //------------------ Get Data
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload;
      state.token = action.payload.token;
      state.isLoadingTransactions = false;
    },
    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.transaction = action.payload;
      state.token = action.payload.token;
    },
    [transactionsOperations.deleteTransaction.fulfilled](state, action) {
      state.transaction = action.payload;
      state.token = action.payload.token;
    },
  },
});
