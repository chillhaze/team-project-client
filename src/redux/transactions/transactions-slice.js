import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  ballanceData: null,
  transactionsData: [],
  type: 'credit',
  period: new Date().toISOString(),
  token: null,
  isLoading: false,
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
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload;
      state.isLoading = false;
    },
    //------------------ Get Data
    [transactionsOperations.getBallance.pending](state, _) {
      state.isLoadingBallance = true;
    },
    [transactionsOperations.getBallance.fulfilled](state, action) {
      state.ballanceData = action.payload;
      state.isLoadingBallance = false;
    },
    [transactionsOperations.createBallance.fulfilled](state, action) {
      state.ballanceData = action.payload;
      state.isLoadingBallance = false;
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

export const { setBalanceToState, setType, setPeriod } = transactionsSlice.actions;
 
