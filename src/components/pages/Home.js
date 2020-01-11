import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../layout/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className='row' style={{ paddingTop: '45px' }}>
          <div className='col-md-4'>
            <h2>Register</h2>
            <p>
              Click on the Register tab/link to make an account. Open up an
              account today.
            </p>
            <p>
              <Link className='btn btn-secondary' to='/register' role='button'>
                Register »
              </Link>
            </p>
          </div>
          <div className='col-md-4'>
            <h2>Login</h2>
            <p>If you already have created an account. Log in now.</p>
            <p>
              <Link className='btn btn-secondary' to='/login' role='button'>
                Login »
              </Link>
            </p>
          </div>
          <div className='col-md-4'>
            <h2>More</h2>
            <p>Learn more about what you need to register and how it works.</p>
            <p>
              <Link className='btn btn-secondary' to='/more' role='button'>
                More About »
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
