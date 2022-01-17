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
      },
    },
    confirmAction: {
      reducer: (state, action) => {
        state.isConfirmed = action.payload;
        state.shoudModalOpen = false;
      },
      isLogOut: {
        reducer: (state, _) => {
          state.isLogOut = true;
        },
      },
    },
  },
});

export const { openModal, closeModal, confirmAction } = confirmSlice.actions;
