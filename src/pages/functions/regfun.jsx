import React, { useState } from 'react';
import "./lRG.scss"
import Selector from "./selector";
import axios from 'axios';


function RegDB() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

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
        <div>
        <button onClick={callApi}>Register</button>
        </div>
    </div>
    );
}

export default RegDB;
