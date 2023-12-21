import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/navbar'
import './confirmBooking.scss'

const BookingConfirmation = () => {
  const [bookingData, setBookingData] = useState({});
  const [loading, setLoading] = useState(true);
  const [confirmationStatus, setConfirmationStatus] = useState('');

  useEffect(() => {
    const apiUrl = 'https://example.com/api/bookingDetails';

    axios.get(apiUrl)
      .then(response => {
        setBookingData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleConfirmation = () => {

    const confirmationApiUrl = 'https://example.com/api/confirmBooking';
    axios.post(confirmationApiUrl, { bookingId: bookingData.id })
      .then(response => {
        setConfirmationStatus('Booking confirmed!');
      })
      .catch(error => {
        console.error('Error confirming booking:', error);
      });
  };

  const handleDecline = () => {
    const declineApiUrl = 'https://example.com/api/declineBooking';

    axios.post(declineApiUrl, { bookingId: bookingData.id })
      .then(response => {
        setConfirmationStatus('Booking declined!');
      })
      .catch(error => {
        console.error('Error declining booking:', error);
      });
  };

  return (
    <div className='booking-confirmation'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='booking-details'>
          <img src={bookingData.pictureUrl} alt="Hostel" />
          <h2>{bookingData.hostelName}</h2>
          <p>Room: {bookingData.roomDetails}</p>
          <p>Student Name: {bookingData.studentName}</p>
          <div className='buttons'>
            <button className='confirm' onClick={handleConfirmation}>Confirm</button>
            <button className='decline' onClick={handleDecline}>Decline</button>
            <br/>
          </div>
          {confirmationStatus && <p>{confirmationStatus}</p>}
        </div>
      )}
    </div>
  );
};

export default BookingConfirmation;
