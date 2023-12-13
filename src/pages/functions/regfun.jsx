import React, { useState } from 'react';
import "./lRG.scss"
import Selector from "./selector";
import './logdb.scss'

function RegDB() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'RegDBlication/json',
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
          <h1>Register</h1>
        
          <div className='insider'>
            <label>First Name:</label>
            <input type="text"  placeHolder="e.g Kondwani" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='insider'>
            <label>Last Name:</label>
            <input type="text" placeHolder="e.g Kachikuni" value={LastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className='insider'>
            <label>PhoneNumber:</label>
            <input type="text" placeHolder="e.g 0888000111" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className='insider'>
            <label>Email:</label>
            <input type="text" placeHolder="e.g example@me.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='insider'>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <div className='insider'>
            <Selector/>
          </div>
        <div>
        <button onClick={handleRegister}>Register</button>
        </div>
    </div>
    );
}

export default RegDB;
