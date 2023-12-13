import React, { useState } from 'react';
import './logdb.scss';

const Selector = () => {
  const [selectedItem, setselected] = useState('');
  const [accType, setAccType] = useState('');
  const handleSelect = (event) => {
    setselected(event.target.value);
  };

  return (
    <form className='select'>
      <label className='radiobtw'>
        <input
          type='radio'
          value='Student'
          checked={selectedItem === 'Student'}
          onChange={(event) => setAccType(event.target.value)}
        />
        Student
      </label>

      <label className='radiobtw'>
        <input
          type='radio'
          value='Landlord'
          checked={selectedItem === 'Landlord'}
          onChange={(event) => setAccType(event.target.value)}
        />
        Landlord
      </label>

      <label className='radiobtw'>
        <input
          type='radio'
          value='Estate agency'
          checked={selectedItem === 'Estate agency'}
          onChange={(event) => setAccType(event.target.value)}
        />
        Estate Agency
      </label>
      <p>Selected: {selectedItem}</p>
    </form>
  );
};

export default Selector;
