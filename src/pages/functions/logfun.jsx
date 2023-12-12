import React, { useState, useEffect } from 'react';

const LogFun = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('registeredUser')) {
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = () => {
    localStorage.setItem('registeredUser', username);
    setIsRegistered(true);
    setMessage('Registration successful. You can now log in.');
  };

  const handleLogin = () => {
    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser && registeredUser === username) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='LogFun box'>
      <form>
        <h1>{isRegistered ? 'Login' : 'Register'}</h1>
        {/* <h2>login</h2> */}
        <div className='inputBox'>
          <label>Username:</label>

          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required='required'
          />
          {/* <span>Username</span>
          <i></i> */}
        </div>

        <div className='inputBox'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required='required'
          />
          {/* <span>Password</span>
          <i></i> */}
        </div>
        {/* <div className='links'>
          <a href=''>forgot password</a>
          <a href=''>sign up</a>
        </div> */}
        {/* <input type='submit' value='Login' /> */}
        {isRegistered ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleRegister}>Register</button>
        )}
        <p>{message}</p>
      </form>
    </div>
  );
};

export default LogFun;
