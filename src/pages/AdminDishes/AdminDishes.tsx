import React from 'react';
import { Link } from 'react-router-dom';

const AdminDishes: React.FC = () => {
  return (
    <div className='container pt-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Dishes</h1>
        <Link to={'/admin/new-dish'} className='btn btn-outline-dark'>
          Add new dish
        </Link>
      </div>
    </div>
  );
};

export default AdminDishes;
