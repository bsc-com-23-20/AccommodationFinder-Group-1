import React, { useState } from 'react';
import "./lRG.scss"
import Selector from "./selector";
<<<<<<< HEAD
import axios from 'axios';

=======
import './logdb.scss'
>>>>>>> d0f980737aef3016fdcf6e464a469e72309e0a1d

function RegDB() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
=======
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
>>>>>>> d0f980737aef3016fdcf6e464a469e72309e0a1d

  function callApi(){
    
    const regDetails = new FormData();
    regDetails.append('')

    const details = axios.get('http://localhost:8000/api/hostels/all')
                      .then(response => {
                        console.log(response.data)
                      })
                      .catch(error=>{
                        console.log(error)
                      } )
  }
   
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/hostels/all', {
        method: 'GET',
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
<<<<<<< HEAD
    <div className='logitems'>
        <h1>Register</h1>
        <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
        <label>PhoneNumber:</label>
        <input type="text" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
        <label>Email:</label>
        <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <Selector/>
        </div>
=======
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
>>>>>>> d0f980737aef3016fdcf6e464a469e72309e0a1d
        <div>
        <button onClick={callApi}>Register</button>
        </div>
    </div>
    );
}

export default RegDB;
