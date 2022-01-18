import { createSlice } from '@reduxjs/toolkit';
import * as categoriesOperations from './categories-operations';

const initialState = {
  categoriesData: null,
  isLoadingCategories: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    //------------------ Get Data
    [categoriesOperations.getCategories.pending](state, _) {
      state.isLoadingCategories = true;
    },
    [categoriesOperations.getCategories.fulfilled](state, action) {
      state.categoriesData = action.payload;
      state.isLoadingCategories = false;
    },
  },
});
