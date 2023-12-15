import React from 'react';
import './boxwords.scss';
import { useHistory } from 'react-router-dom';

function BoxInWords() {
  return (
    <div className='boxMain'>
      <div className='box1 firstBox'>
        <div className='heading'>Find a home</div>
        <p className='paragraph'>Housing for singles, doubles and triples</p>
      </div>
      <div className='box1'>
        <div className='heading'>Add Hostel</div>
        <p className='paragraph'>
          Just add your hostel. Accofinder will do the marketing
        </p>
      </div>

      <div className='box1 lastBox'>
        <div className='heading'>Login here</div>
        <p className='paragraph'>
          Create account with Accofinder to book or upload your place
        </p>
      </div>
    </div>
  );
}

export default BoxInWords;
