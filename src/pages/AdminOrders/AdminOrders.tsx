import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchOrders } from '../../store/ordersSlice/ordersThunks';
import {
  selectOrders,
  selectOrdersLoading,
} from '../../store/ordersSlice/ordersSlice';
import OrderItem from '../../components/OrderItem/OrderItem';
import Spinner from '../../components/Spinner/Spinner';

const AdminOrders: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const isLoading = useAppSelector(selectOrdersLoading);
  const getOrders = useCallback(async () => {
    await dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    void getOrders();
  }, [getOrders]);

  let content = <Spinner />;

  if (orders.length > 0 && !isLoading) {
    content = (
      <>
        {orders.map((order) => (
          <OrderItem key={order.id} id={order.id} dishes={order.items} />
        ))}
      </>
    );
  } else if (orders.length === 0 && !isLoading) {
    content = (
      <h2 className='text-center pt-5 text-secondary'>Orders list is empty.</h2>
    );
  }

  return (
    <div className='container pt-4'>
      <h1 className='m-0'>Orders</h1>
      <div className='pt-4'>
        <div className='row'>
          <div className='col-lg-10 col-xl-8 col-xxl-7'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
