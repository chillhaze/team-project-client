import { getType } from '../transactions/transactions-selectors';
import { createSelector } from 'reselect';

export const isLoadingCategories = state =>
  state.categories.isLoadingCategories;

export const getCategories = state => state.categories.categoriesData;

export const getFilteredCategories = createSelector(
  [getCategories, getType],
  (categories, type) => categories.filter(elem => elem.type === type),
);
