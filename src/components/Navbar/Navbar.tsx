import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar orange shadow'>
      <div className='container'>
        <Link className='navbar-brand text-white' to='/admin'>
          Dodo Pizza Admin
        </Link>
        <div className='d-flex gap-3 text-white'>
          <NavLink className='nav-link' to='/admin/dishes'>
            Dishes
          </NavLink>
          <NavLink className='nav-link' to='/admin/orders'>
            Orders
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
