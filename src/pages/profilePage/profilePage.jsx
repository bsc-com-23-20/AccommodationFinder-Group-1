import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDisplay from './profileDisplay';
import './profile.scss';
import { useNavigate } from 'react-router-dom';
import url from '../functions/axiosClient';
import { useDispatch } from 'react-redux';
import { landlordLogin } from '../../features/loginFeature/landlordLoginSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState({
    image: '',
    phoneNumber: '',
    email: '',
  });

  const { firstname, lastname, email, phonenumber } = url

    .get('/api/landlords/details/get')
    .then((res) => {
      const landlordData = res.data;
      const { landlord } = landlordData;
      //console.log(landlord[0]);
      //console.log(JSON.stringify(landlordData));
      // console.log(landlord[0]);
      const { firstname, lastname, email, phonenumber } = landlord[0];
      console.log({ firstname, lastname, email, phonenumber });
      dispatch(landlordLogin({ firstname, lastname, email, phonenumber }));
      console.log('Inside GET request of ProfilePage component');
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  //Dispatch landlordLogin action and feed it with fetched landlord login data

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
