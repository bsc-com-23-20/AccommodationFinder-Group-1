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
        <button onClick={callApi}>Register</button>
        </div>
    </div>
    );
}

export default RegDB;
