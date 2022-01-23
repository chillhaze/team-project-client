import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth-slice';
import { ballanceSlice } from './ballance/ballance-slice';
import { transactionsSlice } from './transactions/transactions-slice';
import { categoriesSlice } from './categories/categories-slice';
import { reportsSlice } from './reports/reports-slice';
import { confirmSlice } from './confirming/confirm-slice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    // ballance: ballanceSlice.reducer,
    transactions: transactionsSlice.reducer,
    categories: categoriesSlice.reducer,
    reports: reportsSlice.reducer,
    confirm: confirmSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
