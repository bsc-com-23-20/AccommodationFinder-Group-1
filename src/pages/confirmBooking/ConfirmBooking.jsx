import ArrowBack from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import photo_geoff from './images/geoff.jpg';
import Transactio_ID from './images/Transaction ID.jpg';

import './ConfirmBooking.css';
import { nanoid } from '@reduxjs/toolkit';

const ConfirmBooking = () => {
  //   const [prospectiveTenant, setProspectiveTenant] = useState([
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //     {
  //       id: nanoid(),
  //       name: 'user',
  //       phoneNumber: '0992787820',
  //       email: 'johnbanda@gmail.com',
  //       photo: photo_geoff,
  //       transaction_id: Transactio_ID,
  //     },
  //   ]);
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
            <img
              className='profile-pic'
              src={photo_geoff}
              alt='student_photo'
            />
          </div>
          <div className='name-container'>
            <p>Student Name</p>
            <p>Email</p>
            <p>Phone Number</p>
          </div>
          <div className='trans-id-container'>
            <div className='trans-id-here'>
                <img src={Transactio_ID} alt="" />
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
