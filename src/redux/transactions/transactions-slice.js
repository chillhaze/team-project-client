import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  transactionsData: [],
  ballance: 0,
  type: 'credit',
  // token: null,
  isLoading: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    setBalanceToState: (state, action) => {
      state.ballance = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
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
    // [transactionsOperations.getBalance.pending](state, _) {
    //   state.isLoading = true;
    // },
    // [transactionsOperations.getBalance.fulfilled](state, action) {
    //   state.transactionsData.ballance = action.payload;
    // state.token = action.payload.token;
    // state.isLoading = false;
    // },
    // [transactionsOperations.setBalance.pending](state, action) {
    //   state.transactionsData.ballance = action.payload;
    // state.token = action.payload.token;
    // state.isLoading = true;
    // },
    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.transactionsData = [
        ...state.transactionsData,
        action.payload.transaction,
      ];
      // state.ballance = action.payload.ballance;
      // state.token = action.payload.token;
    },
    [transactionsOperations.deleteTransaction.fulfilled](state, action) {
      state.transactionsData = state.transactionsData.filter(
        ({ _id }) => _id !== action.payload._id,
      );
      // state.ballance = action.payload.balance;
      // state.token = action.payload.token;
    },
  },
});

export const { setBalanceToState, setType } = transactionsSlice.actions;
