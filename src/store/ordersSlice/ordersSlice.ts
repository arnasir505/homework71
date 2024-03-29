import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { deleteOrder, fetchOrders } from './ordersThunks';
import { Order } from '../../types';

interface OrderState {
  data: Order[];
  loading: boolean;
  error: boolean;
  deleteId: null | string;
}

const initialState: OrderState = {
  data: [],
  loading: false,
  error: false,
  deleteId: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.data = [];
      });
    builder
      .addCase(deleteOrder.pending, (state, action) => {
        state.deleteId = action.meta.arg;
        state.error = false;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.deleteId = null;
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.deleteId = null;
        state.error = true;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
export const selectOrders = (state: RootState) => state.orders.data;
export const selectOrdersLoading = (state: RootState) => state.orders.loading;
export const selectOrdersDeleteId = (state: RootState) => state.orders.deleteId;
