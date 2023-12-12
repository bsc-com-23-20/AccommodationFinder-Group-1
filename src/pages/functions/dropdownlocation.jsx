import React, { useState } from 'react';

const DropDownLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationSelect = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <label>
        <select value={selectedLocation} onChange={handleLocationSelect}>
          <option value="">Select...</option>
          <option value="Chikanda Urban">Chikanda Urban</option>
          <option value="Chikanda Rural">Chikanda Rural</option>
          <option value="Chikanda Matiya">Chikanda Matiya</option>
          <option value="Ndakhalira">Ndakhalira</option>
          <option value="Chikanda Phalombe">Chikanda Phalombe</option>
          <option value="Economics Bridge">Economics Bridge</option>
        </select>
      </label>
    </div>
  );
};

export default DropDownLocation;
