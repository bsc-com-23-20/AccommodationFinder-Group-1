import NavBar from "../../components/navbar/navbar"
import PostPage from "../bookingPage/bookingPage"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingPage = () => {
  const [pictures, setPictures] = useState([]);
  

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        setPictures(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
        
    <div>
        <NavBar/>
      {pictures.map(picture => (
        <div key={picture.id} className="picture-card">
          <img src={picture.imageUrl} alt={`Posted by ${picture.hostelName}`} />
          <div className="details">
            <h2>{picture.hostelName}</h2>
            <p>Location: {picture.location}</p>
            <p>Price: ${picture.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingPage;
