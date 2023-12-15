import { useState } from 'react';
import './postHostel.css';
import url from '../functions/axiosClient';

function PostHostel() {
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    url
      .post('/api/hostels/add', {
        name: name,
        location: location,
        gender: gender,
        vacantRooms: rooms,
        file: file,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleGender(e) {
    e.preventDefault();
    setGender(e.target.value);
  }
  function handleRooms(e) {
    e.preventDefault();
    setRooms(e.target.value);
  }
  function handleLocation(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  async function handleFile(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }
  return (
    <form className='hostelForm' onSubmit={handleSubmit}>
      <input
        id='imageSelector'
        type='file'
        accept='.png, .jpg, .jpeg'
        onChange={handleFile}
      />
      <br />
      <input
        className='hostelDetail'
        type='text'
        placeholder='name'
        onChange={handleName}
      />
      <br />
      <input
        className='hostelDetail'
        type='text'
        placeholder='vacant rooms'
        onChange={handleRooms}
      />
      <br />
      <select className='location' onChange={handleLocation}>
        <option selected disabled>
          Location
        </option>
        <option value='Chikanda Rural'>Chikanda Rural</option>
        <option value='Chikanda Urban'>Chikanda Urban</option>
      </select>
      <br />
      <input
        className='radio'
        type='radio'
        name='gender'
        value='male'
        onChange={handleGender}
      />
      <label className='genderLabel'>male</label>
      <br />
      <input
        className='radio'
        type='radio'
        name='gender'
        value='female'
        onChange={handleGender}
      />
      <label className='genderLabel'>female</label>
      <br />
      <input className='postButton' type='submit' value='post' />
    </form>
  );
}
export default PostHostel;
