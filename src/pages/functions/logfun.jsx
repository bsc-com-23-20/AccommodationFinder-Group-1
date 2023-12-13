import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LogFun = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {

    if (localStorage.getItem('registeredUser')) {
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = () => {

    localStorage.setItem('registeredUser', Email);
    setIsRegistered(true);
    setMessage('Registration successful. You can now log in.');
  };

  const handleLogin = () => {

    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser && registeredUser === Email) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="LogFun">
        <h1>{isRegistered ? 'Login' : 'Register'}</h1>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isRegistered ? (
          <button  type='submit' onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleRegister}>Register</button>
        )}
        <p>{message}</p>
      </div>
  );
};

export default LogFun;
