import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiDish, ApiOrder, OrderDish } from '../../types';

export const fetchOrders = createAsyncThunk('orders/fetch', async () => {
  const { data: orders } = await axiosApi.get<ApiOrder | null>(
    '/dodo/orders.json'
  );
  const newOrders = [];
  if (orders) {
    for (const order in orders) {
      const itemsArr: OrderDish[] = [];
      let response;
      for (const key in orders[order]) {
        response = await axiosApi.get<ApiDish | null>(
          '/dodo/dishes/' + key + '.json'
        );
        if (
          response.data &&
          response.data.image &&
          response.data.title &&
          response.data.price
        ) {
          itemsArr.push({ ...response.data, count: orders[order][key] });
        }
      }
      newOrders.push({ id: order, items: itemsArr });
    }
  }

  if (!orders) {
    throw new Error('Not Found');
  }

  return newOrders;
});

export const deleteOrder = createAsyncThunk(
  'orders/delete',
  async (id: string) => {
    try {
      await axiosApi.delete('/dodo/orders/' + id + '.json');
    } catch (error) {
      console.log(error);
    }
  }
);
