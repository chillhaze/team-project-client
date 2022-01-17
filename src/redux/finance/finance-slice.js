import { createSlice } from '@reduxjs/toolkit';
import * as financeOperations from './finance-operations.js';

const initialState = {
  financeData: {
    createdAt: null,
    income: null,
    expences: null,
    ballance: null,
  },
  token: null,
  isLoading: false,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setBalanceToState: {
      reducer: (state, action) => {
        state.financeData.ballance = action.payload;
      },
    },
  },
  extraReducers: {
    //------------------ Get Data
    [financeOperations.getFinance.pending](state, _) {
      state.isLoading = true;
    },
    [financeOperations.getFinance.fulfilled](state, action) {
      state.financeData = action.payload;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [financeOperations.getBalance.pending](state, _) {
      state.isLoading = true;
    },
    [financeOperations.getBalance.fulfilled](state, action) {
      state.financeData.ballance = action.payload;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [financeOperations.setBalance.pending](state, action) {
      state.financeData.ballance = action.payload;
      state.token = action.payload.token;
      state.isLoading = true;
    },
    [financeOperations.addTransaction.fulfilled](state, action) {
      state.transaction = action.payload;
      state.token = action.payload.token;
    },
    [financeOperations.deleteTransaction.fulfilled](state, action) {
      state.transaction = action.payload;
      state.token = action.payload.token;
    },
  },
});

export const { setBalanceToState } = financeSlice.actions;
