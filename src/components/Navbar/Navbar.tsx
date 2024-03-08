import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  return (
    <nav className='navbar orange shadow-sm'>
      <div className='container'>
        <Link className='navbar-brand text-white' to='/'>
          Dodo Pizza {isAdmin && 'Admin'}
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
