import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';

export const getBallance = createAsyncThunk('ballance', async credentials => {
  try {
    const { data } = await axios.get('/ballance', credentials);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createBallance = createAsyncThunk(
  'ballance',
  async credentials => {
    try {
      const { data } = await axios.post('/ballance', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
