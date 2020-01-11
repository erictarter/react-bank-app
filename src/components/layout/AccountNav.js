import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

const AccountNav = () => {
  const { user, setUser } = useContext(UserContext);
  const { name } = user;

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
          <h6 className='nav-text'>
            {/* <Link to='/'>Account </Link> */}
            {/* Welcome */}
          </h6>
          {/* <h6>
            <Link to='/login'>Login </Link>
          </h6> */}
          {/* <h6 className='nav-text'>{name}</h6> */}
        </div>
      </nav>
    </div>
  );
};

export default AccountNav;
