import React, { useState } from 'react';
import axios from 'axios';
import './postin.scss';
import url from '../functions/axiosClient';

const PostForm = ({ onPostSubmit }) => {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [vacantRoom, setVacantRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    url.post('/api/hostels/add', {
      name: hostelName,
      location: selectedLocation,
      gender: selectedGender,
      vacantRooms: vacantRoom,
      file: image,
    }).then((response) => {
      if(response.status === 201){
        alert('Hostel added successfully')
    }
  }).catch((err) => {
    console.log(err);
  });

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleLocationSelect = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  function handleApi() {
    const formData = new formData();
    formData.append('Image', Image);
    axios.post('url', formData).then((res) => {
      console.log(res);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='file_card'>
        <div className='file_inputs'>
          <input type='file' name='file' onChange={handleImage} />
          <button onClick={handleApi}>upload Hostel picture</button>
          <p className='main'>Supported files</p>
          <p className='info'>JPEG, PNG, JPG and all picture formats</p>
        </div>
        <div className='preview'>
          {image && (
            <div>
              <h3>Preview:</h3>
              <img
                src={image}
                alt='Profile Preview'
                style={{ maxWidth: '300px', maxHeight: '500px' }}
              />
            </div>
          )}
        </div>
        <div className='fileitems'>
          <label>
            <input
              type='text'
              placeHolder='Price Range'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            <input
              type='text'
              PlaceHolder='Hostel Name'
              value={hostelName}
              onChange={(e) => setHostelName(e.target.value)}
            />
          </label>
          <label>
            <input
              type='text'
              PlaceHolder='Vacant Room'
              value={vacantRoom}
              onChange={(e) => setVacantRoom(e.target.value)}
            />
          </label>
          <label>
            Location:
            <select value={selectedLocation} onChange={handleLocationSelect}>
              <option value=''>Select...</option>
              <option value='Chikanda Urban'>Chikanda Urban</option>
              <option value='Chikanda Rural'>Chikanda Rural</option>
              <option value='Chikanda Matiya'>Chikanda Matiya</option>
              <option value='Ndakhalira'>Ndakhalira</option>
              <option value='Chikanda Phalombe'>Chikanda Phalombe</option>
              <option value='Economics Bridge'>Economics Bridge</option>
            </select>
            <select
              id='gender'
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option selected disabled>
                Gender
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </label>

          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
}};

export default PostForm;
