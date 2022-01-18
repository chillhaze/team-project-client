import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoudModalOpen: false,
  isConfirmed: false,
  isLogOut: false,
};

export const confirmSlice = createSlice({
  name: 'confirm',
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
});

export const { openModal, closeModal, confirmAction, isLogOut } =
  confirmSlice.actions;
