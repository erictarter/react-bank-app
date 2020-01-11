import React from 'react';
import NavBar from '../layout/NavBar';

const More = () => {
  return (
    <div>
      <NavBar />
      <div className='container' style={{ paddingTop: '34px' }}>
        <div className='row'>
          <div className='col-md-6'>
            <h3> Dposit </h3>{' '}
            <p>Withdrawl and deposit from Savings or Checking</p>
          </div>
          <div className='col-md-6'>
            <h3> Withdrawl </h3>{' '}
            <p>Withdrawl and deposit from Savings or Checking</p>
          </div>
          <div className='col-md-6'>
            <h3> Pay Biils </h3>{' '}
            <p>Withdrawl and deposit from Savings or Checking</p>
          </div>
          <div className='col-md-6'>
            <h3> Manage finance </h3>{' '}
            <p>Withdrawl and deposit from Savings or Checking</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default More;

// create state for each balance amount

// have two accounts and display total Balance

// show new balance for each account and the total balance

// optional view transaction history
