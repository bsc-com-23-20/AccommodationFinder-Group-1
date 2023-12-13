import React, { useState } from 'react';
import './logdb.scss'

const Selector = () => {
  const [selectedItem, setselected] = useState('');

  const handleSelect = (event) => {
    setselected(event.target.value);
  };

  return (
    <div className='select'>
      <label className='radiobtw'>
        <input
          type="radio"
          value="Student"
          checked={selectedItem === 'Student'}
          onChange={handleSelect}
        />
        Student
      </label>

      <label className='radiobtw'>
        <input
          type="radio"
          value="Landlord"
          checked={selectedItem === 'Landlord'}
          onChange={handleSelect}
        />
        Landlord
      </label>

      <label className='radiobtw'>
        <input
          type="radio"
          value="Estate agency"
          checked={selectedItem === 'Estate agency'}
          onChange={handleSelect}
        />
        Estate Agency
      </label>
    </div>
  );
};

export default Selector;
