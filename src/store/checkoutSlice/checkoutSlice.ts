import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dish } from '../../types';
import { fetchCheckoutDishes } from './checkoutThunks';
import { RootState } from '../../app/store';

interface CheckoutState {
  dishes: Dish[];
  show: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: CheckoutState = {
  dishes: [],
  show: false,
  loading: false,
  error: false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckoutDishes.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchCheckoutDishes.fulfilled,
        (state, action: PayloadAction<Dish[]>) => {
          state.loading = false;
          state.dishes = action.payload;
        }
      )
      .addCase(fetchCheckoutDishes.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const checkoutReducer = checkoutSlice.reducer;
export const { openModal, closeModal } = checkoutSlice.actions;
export const selectCheckoutDishes = (state: RootState) => state.checkout.dishes;
export const selectCheckoutLoading = (state: RootState) =>
  state.checkout.loading;
export const selectCheckoutShow = (state: RootState) => state.checkout.show;
