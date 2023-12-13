import React, { useState } from 'react';

const GenderDropdown = () => {
  // State to manage the selected gender
  const [selectedGender, setSelectedGender] = useState('');

  // Function to handle changes in the dropdown selection
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div>
      <select id="gender" value={selectedGender} onChange={handleGenderChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      {selectedGender && <p>You selected: {selectedGender}</p>}
    </div>
  );
};

export default GenderDropdown;
