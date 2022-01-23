import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getReportsSummary = createAsyncThunk(
  'reports',
  async credentials => {
    try {
      const { data } = await axios.get('/reports/summary', credentials);

      return data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getReportsDetailed = createAsyncThunk(
  'reports',
  async credentials => {
    try {
      const { data } = await axios.get(
        `/reports/detailed?year=${credentials.year}&month=${credentials.month}`,
        credentials,
      );

      return data.data.result;
    } catch (error) {
      console.log(error);
    }
  },
);
