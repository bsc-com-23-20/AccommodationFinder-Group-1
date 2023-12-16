// HostelView.jsx

import React, { useState, useEffect } from 'react';
import './viewHostel.scss';

const HostelView = () => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    // Fetch hostels from local storage (for simplicity, you may use a database in a real app)
    const storedHostels = JSON.parse(localStorage.getItem('hostels')) || [];
    setHostels(storedHostels);
  }, []);

  return (
    <div className="hostel-view">
      <h2>View Hostels</h2>
      <div className="hostel-list">
        {hostels.map((hostel, index) => (
          <div key={index} className="hostel-card">
            <h3>{hostel.name}</h3>
            <p>Location: {hostel.location}</p>
            <p>Number of Rooms: {hostel.numberOfRooms}</p>
            <p>Gender: {hostel.gender}</p>
            <div className="pictures">
              {hostel.pictures.map((picture, picIndex) => (
                <img key={picIndex} src={URL.createObjectURL(picture)} alt={`Hostel ${index}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelView;
