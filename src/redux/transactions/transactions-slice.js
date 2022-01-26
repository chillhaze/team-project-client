import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  ballanceData: 0,
  isLoadingBallance: null,
  transactionsData: [],
  isLoadingTransactions: false,
  type: 'credit',
  period: new Date().toISOString(),
  token: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setBalanceToState: (state, action) => {
      state.ballanceData = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
  },
  extraReducers: {
    //------------------ Get Transactions Data
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload;
      state.isLoadingTransactions = false;
    },
    //------------------ Add Transaction
    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.transactionsData = [
        ...state.transactionsData,
        action.payload.transaction,
      ];
      state.ballanceData = action.payload.balance;
    },
    //------------------ Delete Transaction
    [transactionsOperations.deleteTransaction.fulfilled](state, action) {
      state.transactionsData = state.transactionsData.filter(
        ({ _id }) => _id !== action.payload._id,
      );
      state.ballanceData = action.payload.balance;
    },
    //------------------ Get Balance Data
    [transactionsOperations.getBallance.pending](state, _) {
      state.isLoadingBallance = true;
    },
    [transactionsOperations.getBallance.fulfilled](state, action) {
      state.ballanceData = action.payload;
      state.isLoadingBallance = false;
    },
    //------------------ Create Balance Data
    [transactionsOperations.createBallance.fulfilled](state, action) {
      state.ballanceData = action.payload;
      state.isLoadingBallance = false;
    },
  },
});

export const { setBalanceToState, setType, setPeriod } =
  transactionsSlice.actions;
