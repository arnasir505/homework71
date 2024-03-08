import React from 'react';
import { OrderDish } from '../../types';
import { DELIVERY_PRICE } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectOrdersDeleteId } from '../../store/ordersSlice/ordersSlice';
import { deleteOrder, fetchOrders } from '../../store/ordersSlice/ordersThunks';

interface Props {
  id: string;
  dishes: OrderDish[];
}

const OrderItem: React.FC<Props> = ({ id, dishes }) => {
  const dispatch = useAppDispatch();
  const deleteId = useAppSelector(selectOrdersDeleteId);
  const disabled = deleteId === id;

  const handleComplete = async (id: string) => {
    const adminConfirmed = confirm('Complete this order?');
    if (adminConfirmed) {
      await dispatch(deleteOrder(id));
      await dispatch(fetchOrders());
    }
  };

  const totalPrice = dishes.reduce((acc, dish) => {
    return acc + dish.price * dish.count;
  }, 150);

  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <div className='row'>
          <div className='col-12 col-md-8'>
            {dishes.map((dish) => (
              <div className='row' key={Math.random().toString()}>
                <div className='col-8'>
                  <h4 className='card-title'>
                    <span className='fs-6'>{dish.count}x </span>
                    {dish.title}
                  </h4>
                </div>
                <div className='col-4'>
                  <span>{dish.price * dish.count} KGS</span>
                </div>
              </div>
            ))}
            <div className='row'>
              <div className='col-8'>
                <h4 className='card-title'>Delivery</h4>
              </div>
              <div className='col-4'>
                <span>{DELIVERY_PRICE} KGS</span>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4 mt-2 mt-md-0 d-flex flex-column gap-1'>
            <span>Order Total:</span>
            <span className='fw-bold'>{totalPrice} KGS</span>
            <button
              className='btn btn-outline-orange mt-2'
              disabled={disabled}
              onClick={() => handleComplete(id)}
            >
              {disabled ? (
                <>
                  <span
                    className='spinner-border spinner-border-sm'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden' role='status'>
                    Loading...
                  </span>
                </>
              ) : (
                'Complete Order'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
