import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiDishes, Dish } from '../../types';
import { fetchDishes } from './dishesThunks';
import { RootState } from '../../app/store';

interface DishesState {
  items: Dish[];
  loading: boolean;
  error: boolean;
}

const initialState: DishesState = {
  items: [],
  loading: false,
  error: false,
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
          state.error = false;
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
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.items;
