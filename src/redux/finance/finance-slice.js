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
  },
});
