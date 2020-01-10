import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import Register from '../pages/Register';
import UserContext from '../../context/userContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const { name, matchEmail, email, password, password2 } = user;

  const alert = useAlert();

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password === password2 && matchEmail === email) {
      console.log(`${name} logged in`);
    } else {
      alert.error('Password and Email do not Match', {
        timeout: 3000
      });
    }
  };

  return (
    <form className='container' onSubmit={onSubmit}>
      <hr />
      <div className='alert alert-info' role='alert'>
        You are now Registed {name}! Login to use the app.
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label></label>
          <input
            type='email'
            className='form-control'
            name='matchEmail'
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
      {email === matchEmail && password === password2 ? (
        <Link to='/account'>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </Link>
      ) : (
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      )}
    </form>
  );
};

export default Login;
