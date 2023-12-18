import React, { useState } from 'react';
import axios from 'axios';
import './roomUpload.scss';

const RoomUploadForm = () => {
  const [hostelName, setHostelName] = useState('');
  const [roomType, setRoomType] = useState('double');
  const [numRooms, setNumRooms] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);
  const [roomPictures, setRoomPictures] = useState([]);

  const newRoom = {
    hostelName,
    roomType,
    numRooms,
    roomPrice,
    roomPictures,
  };
  const handlePostNewRoom = () => {};

  const handleFileChange = (e) => {
    const files = e.target.files;
    setRoomPictures(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send to the backend
    const formData = new FormData();
    formData.append('hostelName', hostelName);
    formData.append('roomType', roomType);
    formData.append('numRooms', numRooms);
    formData.append('roomPrice', roomPrice);
    roomPictures.forEach((picture, index) => {
      formData.append(`roomPictures[${index}]`, picture);
    });

    try {
      // Replace the URL with your backend API endpoint
      const response = await axios.post('localhost:8000/api/', formData);

      console.log('Room uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading room:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hostel Name:
        <input
          type='text'
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
        />
      </label>

      <label>
        Room Type:
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value='double'>Double</option>
          <option value='single'>Single</option>
          <option value='triple'>Triple</option>
        </select>
      </label>

      <label>
        Number of Rooms:
        <input
          type='number'
          value={numRooms}
          onChange={(e) => setNumRooms(e.target.value)}
        />
      </label>

      <label>
        Room Price:
        <input
          type='number'
          value={roomPrice}
          onChange={(e) => setRoomPrice(e.target.value)}
        />
      </label>

      <label>
        Room Pictures:
        <input type='file' multiple onChange={handleFileChange} />
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default RoomUploadForm;
