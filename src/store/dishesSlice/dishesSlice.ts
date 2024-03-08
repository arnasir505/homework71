import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiDishes, Dish } from '../../types';
import { deleteDish, fetchDishes } from './dishesThunks';
import { RootState } from '../../app/store';

interface DishesState {
  items: Dish[];
  loading: boolean;
  error: boolean;
  deleteId: null | string;
}

const initialState: DishesState = {
  items: [],
  loading: false,
  error: false,
  deleteId: null,
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchDishes.fulfilled,
        (state, { payload: dishes }: PayloadAction<ApiDishes>) => {
          state.loading = false;
          state.items = Object.keys(dishes).map((id) => ({
            id,
            ...dishes[id],
          }));
        }
      )
      .addCase(fetchDishes.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(deleteDish.pending, (state, action) => {
        state.deleteId = action.meta.arg;
        state.error = false;
      })
      .addCase(deleteDish.fulfilled, (state) => {
        state.deleteId = null;
      })
      .addCase(deleteDish.rejected, (state) => {
        state.error = true;
      });
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.items;
export const selectDishesLoading = (state: RootState) => state.dishes.loading;
export const selectDishesDeleteId = (state: RootState) => state.dishes.deleteId;
