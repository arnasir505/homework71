import { configureStore } from '@reduxjs/toolkit';
import { dishFormReducer } from '../store/dishFormSlice/dishFormSlice';
import { dishesReducer } from '../store/dishesSlice/dishesSlice';
import { cartReducer } from '../store/cartSlice/cartSlice';
import { modalReducer } from '../store/modalSlice/modalSlice';
import { ordersReducer } from '../store/ordersSlice/ordersSlice';

export const store = configureStore({
  reducer: {
    dishForm: dishFormReducer,
    dishes: dishesReducer,
    cart: cartReducer,
    modal: modalReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
