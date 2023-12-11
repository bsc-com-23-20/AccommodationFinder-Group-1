import ArrowBack from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import photo_geoff from './images/geoff.jpg';
import Transactio_ID from './images/Transaction ID.jpg';

import './ConfirmBooking.css';
import { nanoid } from '@reduxjs/toolkit';

const ConfirmBooking = () => {
  const [prospectiveTenant, setProspectiveTenant] = useState([
    {
      id: nanoid(),
      name: 'user',
      phoneNumber: '0992787820',
      email: 'testbanda@gmail.com',
      photo: photo_geoff,
      transaction_id: Transactio_ID,
    },
    {
      id: nanoid(),
      name: 'user',
      phoneNumber: '0992787820',
      email: 'johnbanda@gmail.com',
      photo: photo_geoff,
      transaction_id: Transactio_ID,
    },
    {
      id: nanoid(),
      name: 'user',
      phoneNumber: '0992787820',
      email: 'johnbanda@gmail.com',
      photo: photo_geoff,
      transaction_id: Transactio_ID,
    },
    {
      id: nanoid(),
      name: 'user',
      phoneNumber: '0992787820',
      email: 'johnbanda@gmail.com',
      photo: photo_geoff,
      transaction_id: Transactio_ID,
    },
    {
      id: nanoid(),
      name: 'user',
      phoneNumber: '0992787820',
      email: 'johnbanda@gmail.com',
      photo: photo_geoff,
      transaction_id: Transactio_ID,
    },
    {
      id: nanoid(),
      name: 'user',
      phoneNumber: '0992787820',
      email: 'billnbanda@gmail.com',
      photo: photo_geoff,
      transaction_id: Transactio_ID,
    },
  ]);
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
    <section className='confirm-booking-container '>
      <header className='header'>
        <div className='back-icon'>
          <ArrowBack />
        </div>
        <p>confirm booking</p>
      </header>
      <div className='line-break'></div>

      <section className='user-data-container '>
        {prospectiveTenant.map((user) => {
          return (
            <main key={user.id}>
              <div className='top'>
                <div className='profile-pic-container'>
                  <img
                    className='profile-pic'
                    src={photo_geoff}
                    alt='student_photo'
                  />
                </div>
                <div className='name-container'>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.phoneNumber}</p>
                </div>
                <div className='trans-id-container'>
                  <div className='trans-id-here'>
                    <img src={Transactio_ID} alt='' />
                  </div>
                </div>
                <div className='btn-container'>
                  <button className='confirm-btn'>confirm</button>
                  <button className='cancel-btn'>decline</button>
                </div>
              </div>
            </main>
          );
        })}
      </section>
    </section>
  );
};

export default ConfirmBooking;
