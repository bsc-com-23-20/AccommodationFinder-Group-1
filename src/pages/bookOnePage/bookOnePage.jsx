import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bookOnepage.scss';

const BookingForm = () => {
  const [roomData, setRoomData] = useState({
    picture: '',
    price: '',
    owner: '',
    type: '',
    gender: '',
    phoneNumbers: [],
  });
  const [transactionScreenshot, setTransactionScreenshot] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get('your_room_api_endpoint');
        setRoomData(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    fetchRoomDetails();
  }, []);

  const handleScreenshotChange = (e) => {
 
    const file = e.target.files[0];
    setTransactionScreenshot(file);
  };

  const handleSubmit = async () => {
    try {
      const screenshotFormData = new FormData();
      screenshotFormData.append('screenshot', transactionScreenshot);

      const screenshotResponse = await axios.post('your_screenshot_upload_api', screenshotFormData);
      const screenshotUrl = screenshotResponse.data.url;

      const bookingData = {
        roomDetails: roomData,
        screenshotUrl,
      };

      const bookingResponse = await axios.post('your_booking_api', bookingData);

      console.log('Booking successful:', bookingResponse.data);

    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className='hostel-booking'>
      <h2>Hostel Booking</h2>
      <div className='room-details'>
        <img src={roomData.picture} alt="Hostel Room" />
        <p>Price: {roomData.price}</p>
        <p>Owner: {roomData.owner}</p>
        <p>Type: {roomData.type}</p>
        <p>Gender: {roomData.gender}</p>
        <p>Phone Numbers: {roomData.phoneNumbers.join(', ')}</p>
      </div>
      <div className='screenshot-upload'>
        <label>
          Upload Transaction Screenshot:
          <input type="file" accept="image/*" onChange={handleScreenshotChange} />
        </label>
      </div>
      <button onClick={handleSubmit}>Book</button>
    </div>
  );
};

export default BookingForm;
