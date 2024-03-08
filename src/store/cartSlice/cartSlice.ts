import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dish } from '../../types';
import { addOrder } from './cartThunks';

interface CartDish {
  dish: Dish;
  count: number;
}

interface CartState {
  items: CartDish[];
  dishesCount: number;
  totalPrice: number;
  loading: boolean;
  error: boolean;
}

const initialState: CartState = {
  items: [],
  dishesCount: 0,
  totalPrice: 0,
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload: dish }: PayloadAction<Dish>) => {
      const foundIndex = state.items.findIndex(
        (item) => item.dish.id === dish.id
      );

      if (foundIndex !== -1) {
        state.items[foundIndex].count++;
      } else {
        state.items.push({
          dish: dish,
          count: 1,
        });
      }

      state.dishesCount = state.items.reduce((acc, dish) => {
        return (acc += dish.count);
      }, 0);
      state.totalPrice = state.items.reduce((acc, item) => {
        return (acc += item.dish.price * item.count);
      }, 0);
    },
    deleteFromCart: (state, { payload: id }: PayloadAction<string>) => {
      const filteredCartItems = state.items.filter(
        (item) => item.dish.id !== id
      );
      state.items = filteredCartItems;

      state.dishesCount = state.items.reduce((acc, dish) => {
        return (acc += dish.count);
      }, 0);
      state.totalPrice = state.items.reduce((acc, item) => {
        return (acc += item.dish.price * item.count);
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.dishesCount = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addOrder.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.items;
export const selectCartDishesCount = (state: RootState) =>
  state.cart.dishesCount;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectCartLoading = (state: RootState) => state.cart.loading;
