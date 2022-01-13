import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth-slice';
import { financeSlice } from './finance/finance-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    finance: financeSlice.reducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});
