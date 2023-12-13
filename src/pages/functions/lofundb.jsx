import React, { useState } from 'react';
import './logdb.scss';
import { useDispatch } from 'react-redux';

function LogDB() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const BASE_URL = 'http://localhost:8000/api/students/register';

  // const handleRegister = async () => {
  //   try {
  //     const response = await fetch(BASE_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ Email, password }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'LogDBlication/json',
        },
        body: JSON.stringify({ Email, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='items'>
      <h1>Login</h1>
      <div className='insider'>
      <div className='itemholders'>
        <input type="text" placeHolder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className ='itemholders'>
        <input type="password" placeHolder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      </div>

      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LogDB;
