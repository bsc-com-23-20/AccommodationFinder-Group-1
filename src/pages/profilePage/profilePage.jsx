import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDisplay from './profileDisplay';
import './profile.scss';
import { useNavigate } from 'react-router-dom';
import url from '../functions/axiosClient';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    image: '',
    phoneNumber: '',
    email: '',
  });

  url.get('/api/landlords/details/get')
  .then((res)=>{
    console.log(res.data)
  }).
  catch((err)=>{
    console.log(err)
  })
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/profile/:id/editprofile');
  };

  const handleStatusClick = () => {
    navigate('/profile/:id/status');
  };

  const handleProfileUpdate = (updatedProfileData) => {
    setProfileData(updatedProfileData);
  };

  return (
    <div className='profile-page '>
      <div>
        <button onClick={handleButtonClick}>edit profile</button>
      </div>
      <div>
        <h1>Profile Page</h1>
        <div>
          <ProfileDisplay profileData={profileData} />
        </div>
      </div>
      <div>
        <button onClick={handleStatusClick}>Status</button>
      </div>
    </div>
  );
};

export default ProfilePage;
