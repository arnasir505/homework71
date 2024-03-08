import React from 'react';
import { Dish } from '../../types';

const UserDishItem: React.FC<Dish> = ({ id, title, price, image }) => {
  return (
    <div className='col'>
      <div className='card mb-3 cursor-pointer dishCard'>
        <div className='card-body'>
          <div className='d-flex flex-column justify-content-between align-items-center'>
            <div className='mb-3 mb-md-0 d-flex flex-column align-items-center'>
              <img src={image} alt='dish image' className='dish-image mb-1' />
              <h4 className='card-title'>{title}</h4>
            </div>
            <div>
              <span className='fw-bold'>{price} KGS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDishItem;
