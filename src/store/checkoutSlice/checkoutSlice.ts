import { createSlice } from '@reduxjs/toolkit';
import { Dish } from '../../types';
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
});

export const checkoutReducer = checkoutSlice.reducer;
export const { openModal, closeModal } = checkoutSlice.actions;
export const selectCheckoutDishes = (state: RootState) => state.checkout.dishes;
export const selectCheckoutLoading = (state: RootState) =>
  state.checkout.loading;
export const selectCheckoutShow = (state: RootState) => state.checkout.show;
