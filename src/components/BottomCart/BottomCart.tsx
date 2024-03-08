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
      className={`sticky-bottom py-4 bg-white top-border ${
        count > 0 ? '' : 'd-none'
      }`}
    >
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <h3 className='mb-3 mb-md-0'>
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
