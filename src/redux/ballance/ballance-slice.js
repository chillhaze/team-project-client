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
    openModal: {
      reducer: (state, _) => {
        state.shoudModalOpen = true;
      },
    },
    closeModal: {
      reducer: (state, _) => {
        state.shoudModalOpen = false;
        state.isLogOut = false;
      },
    },
    confirmAction: {
      reducer: (state, action) => {
        state.isConfirmed = action.payload;
        state.shoudModalOpen = false;
      },
    },
    isLogOut: {
      reducer: (state, action) => {
        state.isLogOut = action.payload;
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
  },
});
