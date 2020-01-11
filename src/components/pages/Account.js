import React, { useContext } from 'react';
import AccountNav from '../layout/AccountNav';
import UserContext from '../../context/userContext';
import AccountContext from '../../context/accountContext';

// const checking = (max = 0, min = 0) => {
//   return Math.random() * (max - min) + min;
// };

// const saving = (max = 0, min = 0) => {
//   return Math.random() * (max - min) + min;
// };

// const total = Math.round(checking(10000)) + Math.round(saving(10000));

export const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const { name } = user;

  const { balance, setBalance } = useContext(AccountContext);
  const { checking, saving, total } = balance;

  return (
    <div>
      <AccountNav />

      <div
        className='jumbotron'
        style={{
          paddingBottom: '3px',
          paddingTop: '45px',
          backgroundColor: 'white'
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col drop-left'>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Checking Account
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <a className='dropdown-item' href='#'>
                    Deposit
                  </a>
                  <a className='dropdown-item' href='#'>
                    Withdraw
                  </a>
                </div>
              </div>
            </div>
            <div className='col drop-right'>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Savings Account
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <a className='dropdown-item' href='#'>
                    Deposit
                  </a>
                  <a className='dropdown-item' href='#'>
                    Withdraw
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='col'>
                <div className='col'></div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='display-4'>Welcome {name},</h1>
        <p className='lead'>Make a deposit or withdraw from you accounts.</p>
        <h4 style={{ color: '' }}>Total Balance - ${total}</h4>

        <hr />
      </div>
    </div>
  );
};

export default Account;
