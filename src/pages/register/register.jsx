import './register.css';
import { Link } from 'react-router-dom';
import LogFun from '../functions/logfun';

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>ACCOFINDER.</h1>
          <p>
            Whatever the website does will be written here. Trust me this is a
            working website and you are going to enjoy it
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <LogFun />
            <input type='text' placeholder='Email/number' />
            <span className='select'>Student</span>
            <span className='select'>Landlord</span>
            <span className='select'>Estate Egent</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
