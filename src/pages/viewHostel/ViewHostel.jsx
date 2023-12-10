import './ViewHostel.css';
import Room1 from './images/Room-1.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import React from 'react';

const ViewHostel = () => {
  return (
    <section className='view-hostel-container'>
      <div className='head-section'>
        <div className='back-icon'>
          <ArrowBackIcon />
        </div>

        <div className='sub-header'>
          <p className='hostel'>PETITE HOSTEL </p>
        </div>
        <div className='room-card'>
          <p className='room-type'>single room</p>
          <div className='picture-holder'>
            <img className='room-picture' src={Room1} alt='room-1'></img>
          </div>
          <div className='price-book-holder'>
            <p className='price'>MK20000</p>
            <button className='book-btn'>book</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewHostel;
