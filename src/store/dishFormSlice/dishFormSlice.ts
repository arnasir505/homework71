import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { DishForm } from '../../types';

interface DishFormState {
  data: DishForm;
  loading: boolean;
}

const initialState: DishFormState = {
  data: {
    title: '',
    price: 0,
    image: '',
  },
  loading: false,
};

const dishFormSlice = createSlice({
  name: 'dishForm',
  initialState,
  reducers: {
    updateForm: (state, { payload }: PayloadAction<DishForm>) => {
      state.data = payload;
    },
  },
});

export const dishFormReducer = dishFormSlice.reducer;
export const { updateForm } = dishFormSlice.actions;
export const selectDishForm = (state: RootState) => state.dishForm;
