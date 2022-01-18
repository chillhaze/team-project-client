import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getReportsSummary = createAsyncThunk(
  'reports',
  async credentials => {
    try {
      const { data } = await axios.get('/reports/summary', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getReportsDetailed = createAsyncThunk(
  'reports',
  async credentials => {
    try {
      const { data } = await axios.post('/reports/detailed', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
