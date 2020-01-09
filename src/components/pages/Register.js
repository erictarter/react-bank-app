import React, { useState, useContext } from 'react';
import UserContext from '../../context/userContext';

const Register = () => {
  // const [user, setUser] = useState({
  //   // name: '',
  //   // email: '',
  //   // password: '',
  //   // password2: ''
  // });
  const { user, setUser } = useContext(UserContext);
  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password === password2) {
      console.log(`${name} registered`);
    } else {
      console.log('alert passwords do not match');
    }
  };

  return (
    <form className='container' onSubmit={onSubmit}>
      <div className='form-row'>
        <div className='form-group col-md-4'>
          <label></label>
          <input
            type='text'
            className='form-control'
            name='name'
            placeholder='Name'
            value={name}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className='form-group col-md-6'>
          <label></label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className='form-group col-md-6'>
          <label></label>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='Password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          ></input>
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label></label>
          <input
            type='password'
            className='form-control'
            name='password2'
            placeholder='Confirm Password'
            value={password2}
            onChange={onChange}
            minLength='6'
            required
          ></input>
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Register
      </button>
    </form>
  );
};

export default Register;
