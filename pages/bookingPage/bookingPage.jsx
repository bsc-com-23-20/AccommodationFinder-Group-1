
import React, { useState } from 'react';
import './HostelInfo.scss';
import Navbar from '../../components/navbar/navbar';
import PostForm from '../postingpage/postingPage';

const HostelInfo = ({ hostelData }) => {
  const [showRooms, setShowRooms] = useState(false);

  const handleShowRooms = () => {
    setShowRooms(!showRooms);
  };

  if (!hostelData) {
    return <div>
      <Navbar/>
      No hostel data available
      </div>;
  }

  return (
    <div className="hostel-info">
      <Navbar/>
      <div className="hostel-details">
        <h2>{hostelData.name}</h2>
        <p>Location: {hostelData.location}</p>
        <p>Number of Rooms: {hostelData.numRooms}</p>
        <p>Price Range: {hostelData.priceRange}</p>
        <p>Landlord Name: {hostelData.landlordName}</p>
        <button onClick={handleShowRooms}>Show Rooms</button>
      </div>

      {showRooms && (
        <div className="rooms-list">
          {hostelData.rooms.map((room) => (
            <div key={room.id} className="room-item">
              <p>{room.name}</p>
              <p>{room.location}</p>
              <p>{room.Price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostelInfo;
