import ArrowBack from '@mui/icons-material/ArrowBack';
import React from 'react';

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
      <br className='line-break' />
      <main>
        <div className='top'>
          <div className='profile-pic-container'>
            <img className='profile-pic' src='' alt='' />
          </div>
          <div className='name-container'>
            <p>student name</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ConfirmBooking;
