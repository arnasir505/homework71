import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { DishForm } from '../../types';
import { addDish } from './dishFormThunks';

interface DishFormState {
  data: DishForm;
  loading: boolean;
  error: boolean;
}

const initialState: DishFormState = {
  data: {
    title: '',
    price: null,
    image: '',
  },
  loading: false,
  error: false,
};

const dishFormSlice = createSlice({
  name: 'dishForm',
  initialState,
  reducers: {
    updateTitle: (state, { payload: title }: PayloadAction<string>) => {
      state.data.title = title;
    },
    updatePrice: (state, { payload: price }: PayloadAction<string>) => {
      state.data.price = Number(price);
    },
    updateImage: (state, { payload: image }: PayloadAction<string>) => {
      state.data.image = image;
    },
    clearForm: (state) => {
      state.data = {
        title: '',
        price: null,
        image: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDish.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addDish.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(addDish.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const dishFormReducer = dishFormSlice.reducer;
export const { updateTitle, updatePrice, updateImage, clearForm } = dishFormSlice.actions;
export const selectDishForm = (state: RootState) => state.dishForm.data;
export const selectDishFormLoading = (state: RootState) =>
  state.dishForm.loading;
