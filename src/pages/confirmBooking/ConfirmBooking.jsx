import ArrowBack from '@mui/icons-material/ArrowBack';
import React from 'react';

const ConfirmBooking = () => {
  return (
    <section>
      <header>
        <ArrowBack />
        <p>confirm booking</p>
      </header>
      <body>
        <div className='profile-container'>
          <img className='profile-pic' src='' alt='' />
        </div>
        <br className='line-break' />
        <div className='name-container'>
          <p>student name</p>
        </div>
      </body>
    </section>
  );
};

export default ConfirmBooking;
