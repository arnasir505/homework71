import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiDish, DishForm } from '../../types';
import { RootState } from '../../app/store';

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

export const fetchDishForm = createAsyncThunk(
  'dishForm/fetch',
  async (id: string) => {
    const { data: dish } = await axiosApi.get<ApiDish | null>(
      '/dodo/dishes/' + id + '.json'
    );
    if (!dish) {
      throw new Error('Not Found');
    }
    return dish;
  }
);

export const updateDish = createAsyncThunk<void, string, { state: RootState }>(
  'dishForm/update',
  async (id: string, thunkApi) => {
    try {
      const updatedDish = thunkApi.getState().dishForm.data;
      await axiosApi.put('/dodo/dishes/' + id + '.json', updatedDish);
    } catch (error) {
      console.log(error);
    }
  }
);
