import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllLandlordInfo } from '../../features/loginFeature/landlordLoginSlice';

const ProfileDisplay = ({ profileData }) => {
  const landLordInfoFromStore = useSelector((state) => state.landlordLoginInfo);

  // const { firstname, lastname, email, phonenumber } = landLordInfoFromStore[0];

  console.log('Inside Profile Display Component');
  // console.log(landLordInfoFromStore);
  return (
    <div className='profile-display'>
      {profileData.image && (
        <img
          src={profileData.image}
          alt='Profile'
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
      )}
      <div className='imgprofile'>
        {profileData.image && (
          <img
            src={profileData.image}
            alt='Profile'
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        )}
      </div>
      {/* <p>Username: {firstname}</p>
      <p>Phone Number: {phonenumber}</p>
      <p>Email: {email}</p> */}
      {/* <p>Username: {profileData.userName}</p>
      <p>Phone Number: {profileData.phoneNumber}</p>
      <p>Email: {profileData.email}</p> */}
    </div>
  );
};

export default ProfileDisplay;
