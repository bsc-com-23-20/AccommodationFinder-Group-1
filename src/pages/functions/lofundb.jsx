import React, { useState } from 'react';
import './logdb.scss';

import url from './axiosClient';
import { Navigate, useNavigate } from 'react-router-dom';

function LogDB() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const csrf = await url.get('/sanctum/csrf-cookie');

    const login = await url
      .post('/api/login', {
        email: Email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          Navigate('/profile/:id');
        } else {
          alert('not connected');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      id='form'
      autoComplete='true'
      className='items'
      onSubmit={handleLogin}
    >
      <h1>Login</h1>
      <div className='insider'>
        <div className='itemholders'>
          <input
            id='email'
            name='email'
            type='text'
            placeHolder='Email'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='itemholders'>
          <input
            id='password'
            name='password'
            type='password'
            placeHolder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <input className='input' value='LOGIN' type='submit' />
      </div>
    </form>
  );
}

export default LogDB;
