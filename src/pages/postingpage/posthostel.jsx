import { useState } from 'react';
import './postHostel.css';

function PostHostel(){
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
            location:location,
            gender: gender,
            vacantRooms: rooms,
            file: file
          })
          .then((response) => {
            if (response.status === 201) {
              alert('Hostel added successfully');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

    return(
        <form id='hostelForm' onSubmit={handleSubmit}>
            <input id='imageSelector' type="file" onChange={setFile((e)=>e.target.value)}/><br/>
            <input className='hostelDetail' type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/><br/>
            <input className='hostelDetail' type="text" placeholder="vacant rooms" onChange={(e) => setRooms(e.target.value)}/><br/>
            <select className='location' onChange={(e) => setLocation(e.target.value)}>
                <option selected disabled>Location</option>
                <option value='Chikanda Rural'>Chikanda Rural</option>
                <option value='Chikanda Urban'>Chikanda Urban</option>
            </select><br/>
            <input className='radio' type='radio' name='gender' value='male' onChange={(e) => setGender(e.target.value)}/>
            <label className='genderLabel'>male</label><br/>
            <input className='radio' type='radio' name='gender' value='female' onChange={(e) => setGender(e.target.value)}/>
            <label className='genderLabel'>female</label><br/>
            <input className='postButton' type='submit' value="post"/>
        </form>
    )
}
export default PostHostel;
