// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

// axios.defaults.baseURL = 'https://kapusta-app-teamproject.herokuapp.com/api/';
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const getBallance = createAsyncThunk(
//   'ballance/get',
//   async (credentials, { getState }) => {
//     try {
//       const tkn = getState().auth.user.token;
//       token.set(tkn);
//       const { data } = await axios.get('/balance', credentials);

//       console.log(data.result);
//       return data.result;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );

// export const createBallance = createAsyncThunk(
//   'ballance/post',
//   async (credentials, { getState }) => {
//     const tkn = getState().auth.user.token;
//     token.set(tkn);
//     try {
//       const { data } = await axios.post('/balance', {
//         value: `${credentials}`,
//       });

//       return data.result;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );
