import { createSlice } from '@reduxjs/toolkit';
import * as reportsOperations from './reports-operations';

const initialState = {
  reportsDataSummary: null,
  reportsDataDetailed: {
    totalIncome: null,
    totalCosts: null,
    categories: null,
  },
  isLoadingReports: false,
};

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
