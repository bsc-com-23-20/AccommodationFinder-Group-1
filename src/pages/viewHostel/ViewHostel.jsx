import { useState } from 'react';
import './ViewHostel.css';
import Room1 from './images/Room-1.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

const ViewHostel = () => {
  const [room, setRoom] = useState([
    {
      id: nanoid(),
      roomType: 'single room',
      roomPrice: 'MK20000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'double room',
      roomPrice: 'MK30000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'single room',
      roomPrice: 'MK20000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'double room',
      roomPrice: 'MK30000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'single room',
      roomPrice: 'MK20000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'double room',
      roomPrice: 'MK30000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'single room',
      roomPrice: 'MK20000',
      roomPicture: Room1,
    },
    {
      id: nanoid(),
      roomType: 'double room',
      roomPrice: 'MK30000',
      roomPicture: Room1,
    },
  ]);
  return (
    <section className='view-hostel-container'>
      <div className='head-section'>
        <div className='back-icon'>
          <ArrowBackIcon />
        </div>

        <div className='sub-header'>
          <p className='hostel'>PETITE HOSTEL </p>
        </div>

        <div className='cards-holder'>
          <div className='rooms-cards'>
            {room.map((room) => (
              <div className='room-card' key={room.id}>
                <p className='room-type'>{room.roomType}</p>
                <div className='picture-holder'>
                  <img
                    className='room-picture'
                    src={room.roomPicture}
                    alt='room-1'
                  ></img>
                </div>
                <div className='price-book-holder'>
                  <p className='price'>{room.roomPrice}</p>
                  <button className='book-btn'>book</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className='room-card'>
          <p className='room-type'>single room</p>
          <div className='picture-holder'>
            <img className='room-picture' src={Room1} alt='room-1'></img>
          </div>
          <div className='price-book-holder'>
            <p className='price'>MK20000</p>
            <button className='book-btn'>book</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ViewHostel;
