import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getBallance = createAsyncThunk(
  'ballance/get',
  async credentials => {
    try {
      const { data } = await axios.get('/balance', credentials);

      console.log(data.result);
      return data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

export const createBallance = createAsyncThunk(
  'ballance/post',
  async credentials => {
    try {
      const { data } = await axios.post('/balance', {
        value: `${credentials}`,
      });

      return data.result;
    } catch (error) {
      console.log(error);
    }
  },
);
