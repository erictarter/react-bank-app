import React, { useContext } from 'react';
import Register from '../pages/Register';
import UserContext from '../../context/userContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password === password2 && email === email) {
      console.log(`${name} logged in`);
    } else {
      console.log('password does not match');
    }
  };

  return (
    <form className='container' onSubmit={onSubmit}>
      <hr />
      <h3>Login</h3>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label></label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Email'
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
            onChange={onChange}
            required
            minLength='6'
          ></input>
        </div>
      </div>
      <div className='form-row'></div>
      <button type='submit' className='btn btn-primary'>
        Login
      </button>
    </form>
  );
};

export default Login;
