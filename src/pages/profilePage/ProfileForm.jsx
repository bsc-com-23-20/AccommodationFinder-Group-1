
import React, { useState } from 'react';
import axios from 'axios';
import './profile.scss'

const ProfileForm = ({ onProfileUpdate }) => {
  const [profileData, setProfileData] = useState({
    image: '',
    phoneNumber: '',
    email: '',
    userName: '',
  });

  const phoneNumber = profileData?.phoneNumber || 'N/A';
  const email = profileData?.email || 'N/A';


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };


    const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    // Example using FileReader
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData((prevData) => ({ ...prevData, image: reader.result }));
    };
    reader.readAsDataURL(file);
  
    // Add your logic to upload the file to the server
  };
  

  const saveProfile = async () => {
    try {
      // Add your backend API endpoint for saving profile data
      const response = await axios.post('https://example.com/api/profile', profileData);
      onProfileUpdate(response.data); // Notify parent component about the update
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="profile-form">
      <h2>Edit Profile</h2>
      <p>Select profile picture</p>
        <input type="file" accept="image/*" className='img'onChange={handleImageChange} />
      <br />
      <label>
        <input type="text" name="userName" placeHolder="Username" className="input" value={profileData.Username} onChange={handleChange} />
      </label>
      <br/>
      <label>
        <input type="text" name="phoneNumber" placeHolder="Phone Number" className="input" value={profileData.phoneNumber} onChange={handleChange} />
      </label>
      <br />
      <label>
        <input type="text" name="email" placeHolder="Email" className="input" value={profileData.email} onChange={handleChange} />
      </label>
      <br />
      <button onClick={saveProfile}>Save Profile</button>


    </div>
  );
};

export default ProfileForm;
