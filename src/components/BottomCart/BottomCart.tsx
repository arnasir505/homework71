import React from 'react';

const BottomCart: React.FC = () => {
  return (
    <div className='sticky-bottom py-4 bg-white bottom-cart'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='m-0'>Order X for XXX KGS</h3>
        <button className='btn btn-lg btn-outline-orange'>Checkout</button>
      </div>
    </div>
  );
};

export default BottomCart;
