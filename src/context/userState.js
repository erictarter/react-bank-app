import React, { useState } from 'react';
import UserContext from './userContext';

export const UserState = props => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
