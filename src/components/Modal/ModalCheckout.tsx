import React from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  closeModal,
  selectCheckoutShow,
} from '../../store/checkoutSlice/checkoutSlice';
import {
  selectCart,
  selectCartTotalPrice,
} from '../../store/cartSlice/cartSlice';
import CartItem from '../CartItem/CartItem';
import { DELIVERY_PRICE } from '../../constants';

const ModalCheckout: React.FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectCheckoutShow);
  const cartItems = useAppSelector(selectCart);
  const totalCartPrice = useAppSelector(selectCartTotalPrice);

  return (
    <Modal show={show} fullscreen={true} onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Your Order:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item) => (
          <CartItem
            key={item.dish.id}
            id={item.dish.id}
            title={item.dish.title}
            price={item.dish.price}
            count={item.count}
          />
        ))}
        <div className='row mt-4'>
          <div className='col col-sm-8 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-between align-items-center checkout-total'>
            <h5>Delivery</h5>
            <span>150 KGS</span>
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-8 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-between align-items-center checkout-total'>
            <h5>Total</h5>
            <span className='text-decoration-underline  fw-bold'>
              {totalCartPrice + DELIVERY_PRICE} KGS
            </span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCheckout;
