import './register.css';
import { Link } from 'react-router-dom';
import RegDB from '../functions/regfun';
import logo from '../../images/accofinder.png';
import {useState} from "react";
import axios from "axios";

const Register = () => {
    const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [accType, setAccType] = useState('');
  const [selectedItem, setselected] = useState('');

    const subjectToRegister = {
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        password,
        // accType : selectedItem,

    }

    const submitRegister = async (e) => {

        e.preventDefault();
        console.log(subjectToRegister);
        try {
            const res = await axios.post(
                'http://localhost:5000/api/register',
                {...subjectToRegister},
                {headers: {'Content-Type': 'application/json'}},
            );
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <img src={logo} alt='logo' />
          <h1>WELCOME TO ACCOFINDER.</h1>
          <span>
            Do you have an account?
            <Link to='/login'>
              <button>Login</button>
            </Link>
          </span>
        </div>
        <div className='right'>
          {/*<RegDB />*/}
            <form className='items register-form'>
                <h1 className='register-heading-1'>Register</h1>

                <div className='input-holder'>
                    <label>
                        <input className='input'
                            type='text'
                            placeholder='First Name'
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {/*<span>First Name</span>*/}
                    </label>
                </div>

                <div className='input-holder' >
                    <label>
                        <input className='input'
                            type='text'
                            placeholder='Last Name'
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {/*<span>Last Name</span>*/}
                    </label>
                </div>
                <div className='input-holder'>
                    <label>
                        <input className='input'
                            type='text'
                            placeholder='Email'
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/*<span>Email</span>*/}
                    </label>
                </div>
                <div className='input-holder'>
                    <label>
                        <input className='input'
                            type='text'
                            placeholder='Phone Number'
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {/*<span>Phone Number</span>*/}
                    </label>
                </div>
                <div className='input-holder'>
                    <label>
                        <input className='input'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/*<span>Password</span>*/}
                    </label>
                </div>
                
                <div className='input-holder'>
                <select
                    className='select'
                    value={selectedItem}
                    onChange={(e) => setselected(e.target.value)}
                >
                    <option value=''>Select Account Type</option>
                    <option value='Student'>Student</option>
                    <option value='Hostel Owner'>Hostel Owner</option>
                </select>
                </div>

                <div className='insider register-button-container'>
                <button className='register-button' type='submit' onClick={submitRegister}>Register</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
