import { createSlice } from '@reduxjs/toolkit';
import * as ballanceOperations from './ballance-operations';

const initialState = {
  ballanceData: null,
  isLoadingBallance: false,
  shoudModalOpen: false,
  isConfirmed: false,
  isLogOut: false,
};

export const ballanceSlice = createSlice({
  name: 'ballance',
  initialState,
  reducers: {
    setBalanceToState: {
      reducer: (state, action) => {
        state.transactionsData = action.payload;
      },
    },
  },
  extraReducers: {
    //------------------ Get Data
    [ballanceOperations.getBallance.pending](state, _) {
      state.isLoadingBallance = true;
    },
    [ballanceOperations.getBallance.fulfilled](state, action) {
      state.ballanceData = action.payload;
      state.isLoadingBallance = false;
    },
    [ballanceOperations.createBallance.fulfilled](state, action) {
      state.ballanceData = action.payload;
      state.isLoadingBallance = false;
    },
  },
});
export const { setBalanceToState } = ballanceSlice.actions;
