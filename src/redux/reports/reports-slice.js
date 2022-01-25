import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import * as reportsOperations from './reports-operations';

const initialState = {
  reportsDataSummary: [],
  reportsDataDetailed: {
    totalIncome: null,
    totalCosts: null,
    categories: [],
  },
  isLoadingReports: false,
};

const monthsAdapter = createEntityAdapter({
  selectId: summary => summary.id,
});

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    //------------------ Get Summary Data
    [reportsOperations.getReportsSummary.pending](state, _) {
      state.isLoadingReports = true;
    },
    [reportsOperations.getReportsSummary.fulfilled](state, action) {
      state.reportsDataSummary = action.payload;
      state.isLoadingReports = false;
      monthsAdapter.setAll(state, action.payload);
    },
    //------------------ Get Detailed Data
    [reportsOperations.getReportsDetailed.pending](state, _) {
      state.isLoadingReports = true;
    },
    [reportsOperations.getReportsDetailed.fulfilled](state, action) {
      state.reportsDataDetailed = action.payload;
      state.isLoadingReports = false;
    },
  },
});

export const monthSelectors = monthsAdapter.getSelectors(
  state => state.summary,
);