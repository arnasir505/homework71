import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCartDishesCount,
  selectCartTotalPrice,
} from '../../store/cartSlice/cartSlice';
import { openModal } from '../../store/checkoutSlice/checkoutSlice';

const BottomCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCartDishesCount);
  const total = useAppSelector(selectCartTotalPrice);
  return (
    <div
      className={`sticky-bottom py-4 bg-white bottom-cart ${
        count > 0 ? '' : 'd-none'
      }`}
    >
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='m-0'>
          Order {count} for {total} KGS
        </h3>
        <button
          className='btn btn-lg btn-outline-orange'
          onClick={() => dispatch(openModal())}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default BottomCart;
