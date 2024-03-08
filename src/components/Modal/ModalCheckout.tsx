import React from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeModal, selectModalShow } from '../../store/modalSlice/modalSlice';
import {
  selectCart,
  selectCartTotalPrice,
} from '../../store/cartSlice/cartSlice';
import CartItem from '../CartItem/CartItem';
import { DELIVERY_PRICE } from '../../constants';

const ModalCheckout: React.FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectModalShow);
  const cartItems = useAppSelector(selectCart);
  const totalCartPrice = useAppSelector(selectCartTotalPrice);

  return (
    <Modal show={show} fullscreen onHide={() => dispatch(closeModal())}>
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
        <div className='row justify-content-center mt-4'>
          <div className='col col-sm-8 col-md-6 col-lg-5 col-xxl-4 d-flex justify-content-between align-items-center checkout-total'>
            <h5>Delivery</h5>
            <span>150 KGS</span>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col col-sm-8 col-md-6 col-lg-5 col-xxl-4 d-flex justify-content-between align-items-center checkout-total'>
            <h5>Total</h5>
            <span className='text-decoration-underline  fw-bold'>
              {totalCartPrice + DELIVERY_PRICE} KGS
            </span>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col col-sm-8 col-md-6 col-lg-5 col-xxl-4'>
            <button className='btn btn-outline-orange w-100 btn-lg'>
              Order
            </button>
          </div>
        </div>
        <div className='row justify-content-center mt-3'>
          <div className='col col-sm-8 col-md-6 col-lg-5 col-xxl-4'>
            <button
              className='btn btn-outline-dark w-100 btn-lg'
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCheckout;
