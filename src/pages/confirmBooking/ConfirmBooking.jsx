import ArrowBack from '@mui/icons-material/ArrowBack';
import React from 'react';
import photo_geoff from './images/geoff.jpg';
import Transactio_ID from './images/Transaction ID.jpg';

import './ConfirmBooking.css';

const ConfirmBooking = () => {
  return (
    <section className='confirm-booking-container'>
      <header>
        <div className='back-icon'>
          <ArrowBack />
        </div>
        <p>confirm booking</p>
      </header>
      <div className='line-break'></div>

      <main>
        <div className='top'>
          <div className='profile-pic-container'>
            <img className='profile-pic' src={photo_geoff} alt='' />
          </div>
          <div className='name-container'>
            <p>student name</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
          <div className='trans-id-container'>
            <div className='trans-id-here'>
              <img src={Transactio_ID} alt='trans_ID' />
            </div>
          </div>
          <div className='btn-container'>
            <button className='confirm-btn'>confirm</button>
            <button className='cancel-btn'>cancel</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ConfirmBooking;
