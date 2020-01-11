import React, { useContext } from 'react';
import NavBar from '../layout/NavBar';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import UserContext from '../../context/userContext';

const Register = () => {
  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   password2: ''
  // });
  const { user, setUser } = useContext(UserContext);
  const { name, email, password, password2 } = user;
  const alert = useAlert();

  // const errorAlert = () => {
  //   alert.error('Form filled out incorrectly', {
  //     timeout: 2000
  //   });

  //   setUser({
  //     name: '',
  //     email: '',
  //     password: '',
  //     password2: ''
  //   });
  // };

  const errorAlert = () => {
    if (password !== password2) {
      alert.error('PASSWORDS DO NOT MATCH', {
        timeout: 3000,
        position: 'bottom right'
      });
    } else if (email.length > 0 && !email.includes('@')) {
      alert.error('Invalid Email', {
        timeout: 3000,
        position: 'bottom right'
      });
    } else if (
      name === '' ||
      email === '' ||
      password === '' ||
      password2 === ''
    ) {
      alert.error('Some form fields are empty... please enter all of them', {
        timeout: 3000,
        position: 'bottom right'
      });
    }
    clearFields();
  };

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const clearFields = e => {
    setUser({
      name: '',
      email: '',
      password: '',
      password2: ''
    });
  };

  const success = e => {
    console.log(`${name} registered`);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('123');
  };

  return (
    <div>
      <NavBar />
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

        {name &&
        email.includes('@') &&
        password === password2 &&
        password.length > 5 ? (
          <div>
            <Link to='/login'>
              <button className='btn btn-primary' onClick={success}>
                Register
              </button>
            </Link>
            <hr />
          </div>
        ) : (
          <div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={errorAlert}
              type='submit'
            >
              Register
            </button>
            <hr />
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
