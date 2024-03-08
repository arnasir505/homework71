import React from 'react';
import trashIcon from '../../assets/trash3.svg';
import { useAppDispatch } from '../../app/hooks';
import { deleteFromCart } from '../../store/cartSlice/cartSlice';

interface Props {
  id: string;
  title: string;
  price: number;
  count: number;
}

const CartItem: React.FC<Props> = ({ id, title, price, count }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='row bottom-border py-2 justify-content-center'>
      <div className='col col-sm-8 col-md-6 col-lg-5 col-xxl-4 d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center gap-2'>
          <h4 className='mb-0'>{title}</h4>
          <span>x{count}</span>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <span>{price * count} KGS</span>
          <button className='btn' onClick={() => dispatch(deleteFromCart(id))}>
            <img src={trashIcon} alt='trash' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
