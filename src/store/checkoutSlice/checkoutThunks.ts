import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiDish } from '../../types';

export const fetchCheckoutDishes = createAsyncThunk(
  'checkout/fetchCheckoutDishes',
  async (idArr: string[]) => {
    const checkoutDishes = idArr.map(async (id) => {
      const { data: dish } = await axiosApi.get<ApiDish | null>(
        '/dodo/dishes/' + id + '.json'
      );
      if (!dish) {
        throw new Error('Not Found');
      }
      return { ...dish, id };
    });
    return Promise.all(checkoutDishes);
  }
);
