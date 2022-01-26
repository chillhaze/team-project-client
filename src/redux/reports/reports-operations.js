import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getReportsSummary = createAsyncThunk(
  'reports/summary',
  async (credentials) => {
    try {
      const { data } = await axios.get('/reports/summary', {
        params: credentials,
      });

     return data.data.result;
    } catch (error) {
      return { ids: [], entities: null}
      console.log(error);
    }
  },
);

export const getReportsDetailed = createAsyncThunk(
  'reports/detailed',
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
