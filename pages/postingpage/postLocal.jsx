// PostHostel.jsx

import React, { useState } from 'react';
import './postLocal.scss';

const PostHostel = ({ onHostelSubmit }) => {

  const [hostelData, setHostelData] = useState({
    pictures: [],
    name: '',
    location: '',
    numberOfRooms: '',
    gender: 'male', // Default value, can be updated via radio buttons
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostelData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setHostelData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handlePictureChange = (e) => {
    const files = Array.from(e.target.files);
    setHostelData((prevData) => ({ ...prevData, pictures: files }));
  };

  const handleSubmit = () => {
    // Save hostel data to local storage (for simplicity, you may use a database in a real app)
    const storedHostels = JSON.parse(localStorage.getItem('hostels')) || [];
    const updatedHostels = [...storedHostels, hostelData];
    localStorage.setItem('hostels', JSON.stringify(updatedHostels));

    // Ensure onHostelSubmit is a function before calling it
    if (typeof onHostelSubmit === 'function') {
      onHostelSubmit();
    }
  };


  return (
    <div className="hostel-form">
      <h2>Post a Hostel</h2>
      <label>
        Hostel Name:
        <input type="text" name="name" value={hostelData.name} onChange={handleChange} />
      </label>

      <label>
        Location:
        <input type="text" name="location" value={hostelData.location} onChange={handleChange} />
      </label>

      <label>
        Number of Rooms:
        <input
          type="number"
          name="numberOfRooms"
          value={hostelData.numberOfRooms}
          onChange={handleChange}
        />
      </label>

      <label>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={hostelData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={hostelData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </label>

      <label>
        Hostel Pictures:
        <input type="file" name="pictures" onChange={handlePictureChange} multiple />
      </label>

      <button onClick={handleSubmit}>Submit Hostel</button>
    </div>
  );
};

export default PostHostel;
