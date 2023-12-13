import React, { useState } from 'react';

const ProfilePage = () => {
  const [profileName, setProfileName] = useState('John Doe');
  const [profilePicture, setProfilePicture] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      
      <div>
        <h2>Edit Profile</h2>
        <label>
          Profile Name:
          <input type="text" value={profileName} onChange={handleNameChange} />
        </label>

        <label>
          Profile Name:
          <input type="text" value={PhoneNumber} onChange={handleNumberChange} />
        </label>

        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={handlePictureChange} />
        </label>

        {profilePicture && (
          <div>
            <h3>Preview:</h3>
            <img src={profilePicture} alt="Profile Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        )}

        <button onClick={() => alert('Profile Updated!')}>
          Update Profile
        </button>
      </div>

      <div>
        <h2>Profile Information</h2>
        {profilePicture && <img src={profilePicture} alt="Profile" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
        <p>Name: {profileName}</p>
        <p>PhoneNumber: {PhoneNumber}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
