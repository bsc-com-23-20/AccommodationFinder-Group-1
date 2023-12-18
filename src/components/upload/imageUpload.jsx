import axios from 'axios'
import React from 'react'
import {useState} from "react"
import './imgUpload.scss'

function ImageUpload() {
    const [Image, setImage] = useState('')

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
        const formData = new formData()
        formData.append('Image', Image)
        axios.post('url', formData).then((res) => { 
            console.log(res)
        })
        
    }

  return (
    <div>
        <div className='file_card'>
            <div className="file_inputs">
                <input type="file" name = "file"  onChange ={handleImage}/>
                <button onClick = {handleApi}>upload</button>
                </div>
                <p className="main">
                    Supported files
                </p>
                <p className="info">
                   JPEG, PNG, JPG and all picture formats
                </p>
        </div>
        <div className="preview">
            {Image && (
            <div>
                <h3>Preview:</h3>
                <img src={Image} alt="Profile Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
            )}
        </div>
    </div>
  )
}

export default ImageUpload
