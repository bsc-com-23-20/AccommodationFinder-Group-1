import React from 'react';

const ProfileDisplay = ({ profileData }) => {
  return (
    <div className='profile-display'>
        {profileData.image && <img src={profileData.image} alt="Profile" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
        <div className='imgprofile'>
            {profileData.image && <img src={profileData.image} alt="Profile" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
        </div>
      <p>Username: {profileData.userName}</p>
      <p>Phone Number: {profileData.phoneNumber}</p>
      <p>Email: {profileData.email}</p>
    </div>
  );
};

export default ProfileDisplay;
