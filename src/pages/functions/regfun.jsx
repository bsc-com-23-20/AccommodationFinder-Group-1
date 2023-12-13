import React, { useState } from 'react';
import './lRG.scss';
import Selector from './selector';
import './logdb.scss';

function RegDB() {
  const BASE_URL = 'http://localhost:8000/api/students/register';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
        }),
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
            <input type="text"  placeHolder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='insider'>
            <input type="text" placeHolder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className='insider'>
            <input type="text" placeHolder="PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className='insider'>
            <input type="text" placeHolder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='insider'>
            <input type="password"  placeHolder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
