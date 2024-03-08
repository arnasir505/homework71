import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartDish } from '../../types';
import { RootState } from '../../app/store';

interface CartState {
  data: CartDish;
  dishesCount: number;
  totalPrice: number;
  loading: boolean;
  error: boolean;
}

const initialState: CartState = {
  data: {},
  dishesCount: 0,
  totalPrice: 0,
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      { payload: dish }: PayloadAction<{ id: string; price: number }>
    ) => {
      if (dish.id in state.data) {
        state.data[dish.id]++;
      } else {
        state.data[dish.id] = 1;
      }
      state.dishesCount = Object.keys(state.data).reduce((acc, id) => {
        return (acc += state.data[id]);
      }, 0);
      state.totalPrice += dish.price;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.data;
export const selectCartDishesCount = (state: RootState) =>
  state.cart.dishesCount;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
