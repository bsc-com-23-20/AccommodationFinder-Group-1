import ArrowBack from '@mui/icons-material/ArrowBack';
import React from 'react';
import photo_geoff from './images/geoff.jpg';

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

      <main>
        <div className='top'>
          <div className='profile-pic-container'>
            <img className='profile-pic' src={photo_geoff} alt='' />
          </div>
          <div className='name-container'>
            <p>student name</p>
          </div>
        </div>
      </main>
      <div className='trans-id-container'>
        <div className='trans-id-here'>
          <img src='' alt='' />
        </div>
      </div>
    </section>
  );
};

export default ConfirmBooking;
