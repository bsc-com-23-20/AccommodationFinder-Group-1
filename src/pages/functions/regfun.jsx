import React, { useState } from 'react';
import './lRG.scss';
import Selector from './selector';
import './logdb.scss';
import axios from 'axios';

function RegDB() {
  const BASE_URL = 'http://localhost:8000/api/students/register';

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [accType, setAccType] = useState('');
  const [selectedItem, setselected] = useState('');

  const handleRegister = (event) => {
    if (accType === 'Student') {
      axios
        .post('http://localhost:8000/api/students/register', {
          firstname: FirstName,
          lastname: LastName,
          email: Email,
          phonenumber: PhoneNumber,
          password: password,
        })
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => console.log(error));
    } else if (accType === 'Landlord' || accType === 'Estate agency') {
      axios
        .post('http://localhost:8000/api/landlords/register', {
          firstname: FirstName,
          lastname: LastName,
          email: Email,
          phonenumber: PhoneNumber,
          password: password,
        })
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => console.log(error));
    }

    event.preventDefault();
  };

  return (
    <form className='items select'>
      <h1>Register</h1>

      <div className='insider'>
        <input
          type='text'
          placeHolder='First Name'
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='insider'>
        <input
          type='text'
          placeHolder='Last Name'
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className='insider'>
        <input
          type='text'
          placeHolder='PhoneNumber'
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className='insider'>
        <input
          type='text'
          placeHolder='Email'
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='insider'>
        <input
          type='password'
          placeHolder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='insider'>
        <label className='radiobtw'>
          <input
            type='radio'
            name='type'
            value='Student'
            //checked={selectedItem === 'Student'}
            onChange={(event) => setAccType(event.target.value)}
          />
          Student
        </label>

        <label className='radiobtw'>
          <input
            type='radio'
            name='type'
            value='Landlord'
            //checked={selectedItem === 'Landlord'}
            onChange={(event) => setAccType(event.target.value)}
          />
          Landlord
        </label>

        <label className='radiobtw'>
          <input
            type='radio'
            name='type'
            value='Estate agency'
            //checked={selectedItem === 'Estate agent'}
            onChange={(event) => setAccType(event.target.value)}
          />
          Estate Agency
        </label>
        <p>Selected: {selectedItem}</p>
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </form>
  );
}

export default RegDB;
