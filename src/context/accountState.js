import React, { useState } from 'react';
import AccountContext from './accountContext';

const random = (max = 0, min = 0) => {
  return Math.random() * (max - min) + min;
};

const checkingBalance = Math.round(random(10000));
const savingBalance = Math.round(random(10000));

const checkings = (max = 0, min = 0) => {
  return Math.random() * (max - min) + min;
};

const savings = (max = 0, min = 0) => {
  return Math.random() * (max - min) + min;
};

const total = Math.round(checkings(10000)) + Math.round(savings(10000));

const AccountState = props => {
  const [balance, setBalance] = useState({
    checking: checkingBalance,
    saving: savingBalance,
    total: savingBalance + checkingBalance
  });

  return (
    <AccountContext.Provider value={{ balance, setBalance }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountState;
