import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { RootState } from '../../app/store';

export const addDish = createAsyncThunk<void, undefined, { state: RootState }>(
  'dishForm/addDish',
  async (_arg, thunkApi) => {
    try {
      const newDish = thunkApi.getState().dishForm.data;
      await axiosApi.post('/dodo/dishes', newDish);
    } catch (error) {
      console.log(error);
    }
  }
);
