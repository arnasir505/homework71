import React from 'react';
import { Dish } from '../../types';

const DishItem: React.FC<Dish> = ({ id, title, price, image }) => {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
          <div className='mb-3 mb-md-0'>
            <img src={image} alt='dish image' className='dish-image me-2' />
            <h4 className='card-title d-inline-block'>{title}</h4>
          </div>
          <div>
            <span className='fw-bold'>{price} KGS</span>
            <button className='btn btn-outline-dark ms-4 me-2'>Edit</button>
            <button className='btn btn-outline-danger'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
