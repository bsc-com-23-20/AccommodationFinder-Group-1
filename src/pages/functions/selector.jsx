import React, { useState } from 'react';

const Selector = () => {
  const [selectedGender, setselected] = useState('');

  const handleSelect = (event) => {
    setselected(event.target.value);
  };

  return (
    <div className='select'>
      <label>
        <input
          type="radio"
          value="Student"
          checked={selectedGender === 'Student'}
          onChange={handleSelect}
        />
        Student
      </label>

      <label>
        <input
          type="radio"
          value="Landlord"
          checked={selectedGender === 'Landlord'}
          onChange={handleSelect}
        />
        Landlord
      </label>

      <label>
        <input
          type="radio"
          value="Estate agency"
          checked={selectedGender === 'Estate agency'}
          onChange={handleSelect}
        />
        Estate Agency
      </label>
    </div>
  );
};

export default Selector;
