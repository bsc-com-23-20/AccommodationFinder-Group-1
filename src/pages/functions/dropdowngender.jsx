import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <label>
        <select value={selectedGender} onChange={handleGenderChange}>
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
