import React, { useState } from 'react';
import "./lRG.scss"
import Selector from "./selector";

function RegDB() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('')

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
    <div className='logitems'>
        <h1>Register</h1>
        <div>
        <label>Email:</label>
        <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
        <label>Username:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <Selector/>
        </div>
        <div>
        <button onClick={handleRegister}>Register</button>
        </div>
    </div>
    );
}

export default RegDB;
