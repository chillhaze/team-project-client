import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  ballanceData: null,
  transactionsData: [],
  type: 'credit',
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
