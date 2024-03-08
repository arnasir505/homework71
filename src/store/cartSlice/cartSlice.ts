import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartDish } from '../../types';

interface CartState {
  data: CartDish;
  loading: boolean;
  error: boolean;
}

const initialState: CartState = {
  data: {},
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload: id }: PayloadAction<string>) => {
      if (id in state.data) {
        state.data[id]++;
      } else {
        state.data[id] = 1;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
