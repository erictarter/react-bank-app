import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <Link to='/'>
          <i className='material-icons md-48 nav-icon-position'>
            account_balance
          </i>
        </Link>

        <h2 className='nav-text head-text-position'>Bank App</h2>
        <div className=''>
          <h6>
            <Link to='/'>Home </Link>
          </h6>
          <h6>
            <Link to='/login'>Login </Link>
          </h6>
          <h6>
            <Link to='/register'>Register</Link>
          </h6>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
