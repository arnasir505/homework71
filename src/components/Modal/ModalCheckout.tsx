import React, { useCallback, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  closeModal,
  selectCheckoutShow,
} from '../../store/checkoutSlice/checkoutSlice';
import { selectCart } from '../../store/cartSlice/cartSlice';
import { fetchCheckoutDishes } from '../../store/checkoutSlice/checkoutThunks';

const ModalCheckout: React.FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectCheckoutShow);
  const cartData = useAppSelector(selectCart);
  const cartDishes = Object.keys(cartData);

  const getCheckoutDishes = useCallback(async () => {
    try {
      await dispatch(fetchCheckoutDishes(cartDishes)).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [cartDishes, dispatch]);

  useEffect(() => {
    void getCheckoutDishes();
  }, [getCheckoutDishes]);

  return (
    <Modal show={show} fullscreen={true} onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Your Order:</Modal.Title>
      </Modal.Header>
      <Modal.Body>content</Modal.Body>
    </Modal>
  );
};

export default ModalCheckout;
