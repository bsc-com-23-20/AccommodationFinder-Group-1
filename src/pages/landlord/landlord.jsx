import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './landlord.scss'

const Landlord = () => {

  const [hostelDetails, setHostelDetails] = useState({
    name: '',
    totalRooms: 0,
    bookedRooms: 0,
    pendingBookings: 0,
  });

  
  const [numberOfTenants, setNumberOfTenants] = useState(0);
  const [postedHostels, setPostedHostels] = useState([]);

  // Fetch hostel details
  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_FOR_HOSTEL_DETAILS');
        setHostelDetails(response.data);
      } catch (error) {
        console.error('Error fetching hostel details:', error);
      }
    };

    fetchHostelDetails();
  }, []); 

  // Fetch the number of tenants
  useEffect(() => {
    const fetchNumberOfTenants = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_FOR_NUMBER_OF_TENANTS');
        setNumberOfTenants(response.data.count);
      } catch (error) {
        console.error('Error fetching number of tenants:', error);
      }
    };

    fetchNumberOfTenants();
  }, []);

  // Fetch hostels posted by the landlord
  useEffect(() => {
    const fetchPostedHostels = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_FOR_POSTED_HOSTELS');
        setPostedHostels(response.data);
      } catch (error) {
        console.error('Error fetching posted hostels:', error);
      }
    };

    fetchPostedHostels();
  }, []);

  return (
    <div className="landlord-dashboard">

        <div className="sidebar right-sidebar">
        <h3>Hostels</h3>
        <ul>
          {postedHostels.map((hostel) => (
            <li key={hostel.id}>{hostel.name}</li>
          ))}
        </ul>
        </div>
      <div className="main-content">
        <h3>Name: {hostelDetails.name}</h3>
        <p>Total Rooms: {hostelDetails.totalRooms}</p>
        <p>Booked Rooms: {hostelDetails.bookedRooms}</p>
        <p>Pending Bookings: {hostelDetails.pendingBookings}</p>
      </div>

      <div className="sidebar left-sidebar">
        <h3>Number of Tenants</h3>
        <p>{numberOfTenants}</p>
      </div>

    </div>
  );
};

export default Landlord;
