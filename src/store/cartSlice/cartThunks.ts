import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axiosApi from '../../axiosApi';
import { OrderMinified } from '../../types';

export const addOrder = createAsyncThunk<void, undefined, { state: RootState }>(
  'cart/addOrder',
  async (_arg, thunkApi) => {
    try {
      const cartItems = thunkApi.getState().cart.items;
      const newOrder: OrderMinified = cartItems.reduce(
        (acc, item) => ({
          ...acc,
          [item.dish.id]: item.count,
        }),
        {}
      );

      await axiosApi.post('/dodo/orders.json', newOrder);
    } catch (error) {
      console.log(error);
    }
  }
);
