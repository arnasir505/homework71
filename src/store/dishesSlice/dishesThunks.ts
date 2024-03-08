import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiDishes } from '../../types';

export const fetchDishes = createAsyncThunk('dishes/fetch', async () => {
  const { data: dishes } = await axiosApi.get<ApiDishes | null>(
    '/dodo/dishes.json'
  );
  if (!dishes) {
    throw new Error('Not Found');
  }
  return dishes;
});
