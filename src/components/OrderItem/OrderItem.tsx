import React from 'react';
import { OrderDish } from '../../types';
import { DELIVERY_PRICE } from '../../constants';

interface Props {
  id: string;
  dishes: OrderDish[];
}

const OrderItem: React.FC<Props> = ({ id, dishes }) => {
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
            <button className='btn btn-outline-orange mt-2'>
              Complete order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
