import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { DishForm } from '../../types';

export const addDish = createAsyncThunk<void, DishForm>(
  'dishForm/addDish',
  async (dish) => {
    try {
      await axiosApi.post('/dodo/dishes.json', dish);
    } catch (error) {
      console.log(error);
    }
  }
);
