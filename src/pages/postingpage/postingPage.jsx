
import React, { useState } from 'react';
import ImageUpload from '../../components/upload/imageUpload';
import DropDownLocation from '../functions/dropdownlocation';

const PostForm = ({ onPostSubmit }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [hostelName, setHostelName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      imageUrl,
      price,
      location,
      hostelName,
    };
  
    onPostSubmit(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <ImageUpload/>
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Location:
        <DropDownLocation value ={location} onChange={(e) => setLocation(e.target.value)}/>
      </label>
      <label>
        Hostel Name:
        <input type="text" value={hostelName} onChange={(e) => setHostelName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm